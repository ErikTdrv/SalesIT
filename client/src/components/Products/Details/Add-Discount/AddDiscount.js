import React, { useState } from "react";
import "./AddDiscount.css";
import { useParams, Link } from "react-router-dom";

export default function AddDiscount() {
  let { productId } = useParams();
  const [discountPercentage, setDiscount] = useState(50);
  const [error, setError] = useState("");

  async function addDiscount() {
    if (discountPercentage <= 0 || discountPercentage > 99) {
      setError("Discount have to be between 1% - 99% !");
    } else {
    }
  }
  return (
    <div className="discount__container">
      <h1>Add Discount</h1>
      <div className="input__discount">
        <input
          type="number"
          id="percentage"
          name="percentage"
          min="0"
          max="100"
          step="5"
          value={discountPercentage}
          onChange={(e) => setDiscount(e.target.value)}
        />
        <span>%</span>
      </div>
      <div className="buttons">
      <Link to={`/all-products/${productId}`}>
        <button>Back</button>
      </Link>
      <button onClick={addDiscount}>Add</button>
      </div>
      {error && <p className="discount__error">{error}</p>}
    </div>
  );
}
