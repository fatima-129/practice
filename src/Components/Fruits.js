import React, { useState } from "react";

const Fruits = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [fruitList, setFruitList] = useState([]);

  const handleFruits = () => {
    const newFruit = {
      fruitName: name,
      fruitPrice: price,
    };

    setFruitList([...fruitList, newFruit]);
  };

  const totalPrice = fruitList.reduce((acc,crr)=> acc + crr.fruitPrice,0);

  return (
    <div>
      <input
        placeholder="Enter Fruit Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Enter Fruit Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <button onClick={handleFruits}>Add Fruit</button>

      {fruitList.map((f, idx) => (
        <p key={idx}>
          {f.fruitName}: {f.fruitPrice}
        </p>
      ))}
      <hr />
      <h2>Total = {totalPrice}</h2>
    </div>
  );
};

export default Fruits;
