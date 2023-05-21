import React, { useState } from "react";

const Num = () => {
  const [number, setNumber] = useState("");
  const [numberList, setNumberList] = useState([]);

  const AddNumbers = () => {
    setNumberList([...numberList, number]);
    setNumber("");
  };

  const total = numberList.reduce((acc, crr) => acc + crr, 0);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={() => AddNumbers()}>Add Number</button>
      <p>{total}</p>
    </div>
  );
};
export default Num;
