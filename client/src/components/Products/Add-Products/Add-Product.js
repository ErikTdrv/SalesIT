import React, { useState } from "react";
import ComputerProduct from "../ProductsType/ComputerProduct";
import MonitorProduct from "../ProductsType/Monitor";
import "./Add-Product.css";

export default function AddProduct() {
  let [formPage, setFormPage] = useState(0);
  let [products, setProducts] = useState({});
  let [type, setType] = useState("none");
  function changeValue(e) {
    if (e.target.value.length > 0) {
    }
  }
  function chooseType(e){
    let type = e.target.textContent.toLowerCase()
    setType(type)
  }

  return (
    <div className="add-container">
      <h1>Add Product</h1>
      <div className="choosable">
        <button className={ type === 'phone' ? 'clicked' : ''} onClick={chooseType}>Phone</button>
        <button className={ type === 'computer' ? 'clicked' : ''} onClick={chooseType}>
          Computer
        </button>
        <button className={ type === 'monitor' ? 'clicked' : ''} onClick={chooseType}>Monitor</button>
      </div>
      { type === 'computer' ? <ComputerProduct/> : null}
      { type === 'monitor' ? <MonitorProduct/> : null}
    </div>
  );
}
