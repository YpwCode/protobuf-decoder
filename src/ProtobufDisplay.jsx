import { Fragment } from "react";
import { bufferToPrettyHex } from "./hexUtils";
function ProtobufDisplay(props) {
  const { value } = props;
  console.log(JSON.stringify(value.json, null, 4))

  const leftOver = value.leftOver.length ? (
    <p>Left over bytes: {bufferToPrettyHex(value.leftOver)}</p>
  ) : null;

  return (
    <Fragment>
      <div>
        <pre style={{
          background: '#f5f5f5',
          padding: '15px',
          borderRadius: '15px',
          overflowX: 'auto',
          fontFamily: 'monospace'
        }}>
          {JSON.stringify(value.json, null, 2)}
        </pre>
      </div>
      {leftOver}
    </Fragment>
  );
}

export default ProtobufDisplay;
