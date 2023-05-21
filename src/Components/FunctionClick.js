import React, { useState } from "react";

const FunctionClick = () => {
  const ClickContoller = () => {
    console.log("button Clicked");
  };
  return (
    <div>
      <button onClick={ClickContoller}>Click</button>
    </div>
  );
};

export default FunctionClick;
