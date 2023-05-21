import React, { useState } from "react";

const TodoList = () => {
  const [name, setName] = useState("");
  const [nameList, setNameList] = useState([]);

  const NameListController = () => {
    setNameList([...nameList, name]);
  };
  const DeleteName = (a) => {
    const newNames = nameList.filter((n) => n !== a);
    setNameList(newNames);
  };
  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={NameListController}>Add Name</button>
      {nameList.map((n, ind) => (
        <div>
          <p key={ind}>{n}</p>
          <button onClick={() => DeleteName(n)}>Delete Name</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
