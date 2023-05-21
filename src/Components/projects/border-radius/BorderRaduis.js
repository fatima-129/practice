import React, { useState } from "react";
import "./BorderRadius.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
const BorderRadius = () => {
  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);

  return (
    <div className="container">
      <h1>Border Radius Previewer</h1>
      <div
        className="box"
        style={{
          borderTopLeftRadius: topLeft + "px",
          borderTopRightRadius: topRight + "px",
          borderBottomRightRadius: bottomRight + "px",
          borderBottomLeftRadius: bottomLeft + "px",
        }}
      />
      <div className="input_container">
        <input value={topLeft} onChange={(e) => setTopLeft(e.target.value)} />
        <input value={topRight} onChange={(e) => setTopRight(e.target.value)} />
        <input
          value={bottomRight}
          onChange={(e) => setBottomRight(e.target.value)}
        />
        <input
          value={bottomLeft}
          onChange={(e) => setBottomLeft(e.target.value)}
        />
      </div>
      <SyntaxHighlighter language="css" style={darcula}>
        {`border-top-left-radius: ${topLeft};
border-top-right-radius: ${topRight};
border-bottom-right-radius: ${bottomRight};
border-bottom-left-radius: ${bottomLeft};

/* Shorthand Syntax */
border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft};`}
      </SyntaxHighlighter>
    </div>
  );
};

export default BorderRadius;
