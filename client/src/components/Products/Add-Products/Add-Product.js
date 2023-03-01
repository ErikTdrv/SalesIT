import React, { useState } from "react";
import ComputerProduct from "../Computer-Product/ComputerProduct";
import "./Add-Product.css";

export default function AddProduct() {
  let [formPage, setFormPage] = useState(0);
  let [products, setProducts] = useState({});

  function changeValue(e){
      if(e.target.value.length > 0){
       
      }
  }
  return (
    <div className="add-container">
      <h1>Add Product</h1>
      <div className="choosable">
        <button className="all-btn">Phones</button>
        <button className="computers-btn">Computers</button>
        <button className="monitors-btn">Monitors</button>
      </div>
      <ComputerProduct/>
    </div>
  );
}
