import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const options = [
  { value: "/binary-to-decimal", label: "Binary To Decimal" },
  { value: "/border-radius-preview", label: "Border Radius Preview" },
];

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();
  const handleSelectChange = (event) => {
    navigate(event.value);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0303",
      }}
    >
      <Select
        defaultValue={selectedOption}
        onChange={handleSelectChange}
        options={options}
        className="select"
      />
    </div>
  );
};

export default Home;
