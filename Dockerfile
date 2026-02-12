# 构建阶段
FROM node:18-alpine AS builder

WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm ci && \
    npm cache clean --force

# 复制源代码
COPY . .

# 构建项目
RUN npm run build

# 运行阶段
FROM nginx:alpine

# 从构建阶段复制构建产物
COPY --from=builder /app/build /usr/share/nginx/html

# 复制自定义 nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]