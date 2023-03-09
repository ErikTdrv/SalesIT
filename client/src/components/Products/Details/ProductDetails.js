import React, { useState } from "react";
import "./ProductDetails.css";

export default function ProductDetails() {
  let images = [
    "computer1",
    "computer2",
    "computer3",
    "computer4",
    "computer5",
  ];
  let [index, setIndex] = useState(0);
  return (
    <div className="details-container">
      <div className="edit-image-div">
        <img src="/computer.jpg" alt="" className="details__image" />
        <div className="image__switcher">
        <button onClick={() => setIndex(index - 1)}>&#60;</button>
          <section className="image__section">
            <div className="div">{images[index]}</div>
            <div className="div">{images[index + 1]}</div>
            <div className="div">{images[index + 2]}</div>
          </section>
        <button onClick={() => setIndex(index + 1)}>&#62;</button>
        </div>
      </div>
      <div className="info-div"></div>
    </div>
  );
}
