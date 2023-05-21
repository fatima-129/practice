import React, { useState } from "react";

const Labour = () => {
  const [name, setName] = useState("");
  const [motherName, setmotherName] = useState("");
  const [age, setAge] = useState("");
  const [pension, setPension] = useState("");
  const [labourList, setLabourList] = useState([]);

  const handleLabours = () => {
    const newLabour = {
      labourName: name,
      labourMotherName: motherName,
      labourAge: age,
      labourPension: pension,
    };
    setLabourList([...labourList, newLabour]);
    setName("");
    setmotherName("");
    setAge("");
    setPension("");
  };

  const PensionOfLabours = labourList.reduce(
    (acc, current) => acc + current.labourPension,
    0
  );

  const handleDelete = (Pension) => {
    const newList = labourList.filter((a) => a.pension !== Pension);
    setLabourList(newList);
  };
  return (
    <div>
      <input
        placeholder="Enter Name here "
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Enter mother name here "
        type="text"
        value={motherName}
        onChange={(e) => setmotherName(e.target.value)}
      />
      <input
        placeholder="Enter your age"
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input
        placeholder="Enter pension "
        type="number"
        value={pension}
        onChange={(e) => setPension(Number(e.target.value))}
      />
      <button onClick={handleLabours}>Add Labour</button>
      <table style={{ width: "50vw", margin: "50px auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>motherName</th>
            <th>Age</th>
            <th>Pension</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {labourList.map((lab, index) => (
            <tr key={index}>
              <td>{lab.labourName}</td>
              <td>{lab.labourMotherName}</td>
              <td>{lab.labourAge}</td>
              <td>{lab.labourPension}</td>
              <td>
                <button onClick={() => handleDelete(lab.Pension)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr style={{ color: "solid red 5px", width: "300wh" }} />
      <h1>total: {PensionOfLabours}</h1>
    </div>
  );
};

export default Labour;
