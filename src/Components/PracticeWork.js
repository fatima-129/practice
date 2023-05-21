import React, { useState } from "react";

const PracticeWork = () => {
  const [name, setName] = useState("");
  const [nameList, setNameList] = useState([]);

  const nameListController = () => {
    setNameList([...nameList, name]);
    setName("");
  };
  console.log(nameList);

  const deleteName = (a) => {
    const newNames = nameList.filter((n) => n !== a);
    setNameList(newNames);
  };

  return (
    <div>
      <input
        placeholder="Enter Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={nameListController}>Add Name</button>
      {nameList.map((n, ind) => (
        <div>
          <p key={ind}>{n}</p>
          <button onClick={() => deleteName(n)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PracticeWork;
