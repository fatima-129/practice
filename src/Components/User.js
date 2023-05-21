import React, { useState, useEffect } from "react";

const User = () => {
  const [user, setuser] = useState([]); //1
  const [userId, setUserId] = useState();
  const [allUser, setAllUser] = useState([]); //10

  const handleUser = (userId) => {
    const newUser = allUser.filter((u) => u.id === userId); //1
    setuser(newUser);
  };

  const handleDeleteUser = (userId) => {
    const filterUsers = allUser.filter((u) => u.id !== userId);
    setuser(filterUsers);
    setAllUser(filterUsers);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setuser(json);
        setAllUser(json);
      });
  }, []);
  return (
    <div>
      {/* <button onClick={() => handleUser(1)}>user1</button>
      <button onClick={() => handleUser(2)}>user2</button> */}
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={() => handleUser(Number(userId))}>Find User</button>
      {user.map((u, idx) => (
        <div key={idx}>
          <p>{u.name}</p>
          <p>{u.email}</p>
          <button onClick={() => handleDeleteUser(u.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default User;
