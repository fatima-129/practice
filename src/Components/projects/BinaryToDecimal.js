import React, { useState } from "react";

const BinaryToDecimal = () => {
  const [binary, setBinary] = useState("");
  const [result, setResult] = useState("");

  const binaryToDecimal = () => {
    var digit = parseInt(binary, 2);
    setResult(digit);
    console.log(digit);
  };

  return (
    <div>
      <input
        type="text"
        value={binary}
        onChange={(e) => setBinary(e.target.value)}
      />
      <button onClick={binaryToDecimal}>Binary To Decimal</button>

      <p>Result: {result}</p>
    </div>
  );
};

export default BinaryToDecimal;
