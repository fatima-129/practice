import React, { useState } from "react";

const Bill = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [billList, setBillList] = useState([]);

  const handleBill = () => {
    const newBill = {
      billName: name,
      billPrice: price,
    };
    setBillList([...billList, newBill]);
    setPrice("");
    setName("");
  };

  const totalPrice = billList.reduce((acc, crr) => acc + crr.billPrice, 0);

  const handleDelete = (billName) => {
    const newList = billList.filter((b) => b.billName !== billName);
    setBillList(newList);
  };

  return (
    <div>
      <input
        placeholder="Enter Name here"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Enter price"
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <button onClick={handleBill}>Add Entry</button>
      <table style={{ width: "50vw", margin: "50px auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {billList.map((bill, index) => (
            <tr key={index}>
              <td>{bill.billName}</td>
              <td>{bill.billPrice}</td>
              <td>
                <button onClick={() => handleDelete(bill.billName)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <p>totalPrice:{totalPrice}</p>
    </div>
  );
};

export default Bill;
