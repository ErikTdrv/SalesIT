import React, { useState } from "react";
import ComputerProduct from "../ProductsType/ComputerProduct";
import MonitorProduct from "../ProductsType/Monitor";
import PhoneProduct from "../ProductsType/Phone";
import "./Add-Product.css";
import Copyright from "../../Main/Copyright/Copyright";

export default function AddProduct() {
  let [type, setType] = useState("none");

  function chooseType(e){
    let type = e.target.textContent.toLowerCase()
    setType(type)
  }

  return (
    <>
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
      { type === 'phone' ? <PhoneProduct/> : null}
    </div>
    <Copyright/>
    </>
  );
}
