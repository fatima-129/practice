import React, { useState } from "react";

const Test = () => {
  const [name, setName] = useState("");
  const [fatherName, setfatherName] = useState("");
  const [age, setAge] = useState("");
  const [salery, setSalery] = useState("");
  const [userList, setUserList] = useState([]);

  const addUser = () => {
    const newUser = {
      userName: name,
      userFatherName: fatherName,
      userAge: age,
      userSalery: salery,
    };
    setUserList([...userList, newUser]);
  };

  return (
    <div>
      <input
        placeholder="Enter your name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Enter your father name"
        type="text"
        value={fatherName}
        onChange={(e) => setfatherName(e.target.value)}
      />
      <input
        placeholder="Enter your age"
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input
        placeholder="Enter your salery"
        type="number"
        value={salery}
        onChange={(e) => setSalery(Number(e.target.value))}
      />
      <button onClick={addUser}>Add User</button>
      <table style={{ width: "90vw", margin: "50px auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Father Name</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              <td>{user.userName}</td>
              <td>{user.userFatherName}</td>
              <td>{user.userAge}</td>
              <td>{user.userSalery}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Test;
