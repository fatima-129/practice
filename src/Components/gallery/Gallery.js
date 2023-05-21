import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [image, setImage] = useState("");
  const [imageList, setImageList] = useState([]);

  const addImage = () => {
    setImageList([...imageList, image]);
    setImage("");
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Image Gallery</h1>
      </div>
      <div className="input_container">
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button onClick={addImage}>Add Image</button>
      </div>

      {imageList.map((img, index) => (
        <img key={index} src={img} width={"200px"} height={"200px"} />
      ))}
    </div>
  );
};

export default Gallery;
