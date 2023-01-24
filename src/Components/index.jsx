import React, {useEffect, useState} from "react";
import QrReader from "react-qr-scanner";

export function Camera() {
  const [result, setResult] = useState(null);
  const [delay, setDelay] = useState(1000);
  const previewStyle = {
    height: 240,
    width: 320,
  };

  const handleScan = (data) => {
    setResult(data);
    console.log("dddd", data);
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <>TESTE 
      <div
        style={{width: "100%", display: "flex", justifyContent: "center", margin: "20px 0 20px 0"}}>
        {result == null && (
          <QrReader
            delay={delay}
            style={previewStyle}
            onError={handleError}
            onScan={handleScan}
            key="environment"
            facingMode="environment"
          />
        )}
        <h2>{result?.text}</h2>
      </div>
    </>
  );
}
