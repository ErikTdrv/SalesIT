import React, { useState } from "react";
import "./ProductDetails.css";

export default function ProductDetails() {
  let images = [
    "/computer.jpg",
    "/computer.jpg",
    "/computer.jpg",
    "/computer.jpg",
    "/computer.jpg",
  ];
  let [index, setIndex] = useState(0);
  return (
    <div className="details-container">
      <div className="edit-image-div">
        <img src="/computer.jpg" alt="" className="details__image" />
        <div className="image__switcher">
          <button onClick={() => setIndex(index - 1)}>&#60;</button>
          <section className="image__section">
            <div className="div">
              <img src={images[index]} alt="" />
            </div>
            <div className="div"> <img src={images[index + 1]} alt="" /></div>
            <div className="div"> <img src={images[index + 2]} alt="" /></div>
          </section>
          <button onClick={() => setIndex(index + 1)}>&#62;</button>
        </div>
        <div className="buttons">
          <button>Back</button>
          <button>Delete</button>
          <button>Edit</button>
          <button>Add Discount</button>
          <button>Add to Card</button>
        </div>
      </div>
      <div className="info-div"></div>
    </div>
  );
}
