import React, { useState } from "react";

export default function PhoneProduct(){
    let [products, setProducts] = useState({});
  function changeValue(e) {
    if (e.target.value.length > 0) {
    }
  }
  return (
    <form className="add-form">
      <div className="inputs">
        <div className="left-input">
          <div>
            <input type="text" onChange={changeValue} />
            <span className={products.name ? "value-there" : ""}>
              Phone Name
            </span>
          </div>
          <div>
            <input type="text" onChange={changeValue} />
            <span className={products.capacity ? "value-there" : ""}>
              Capacity
            </span>
          </div>
          <div>
            <input type="text" onChange={changeValue} />
            <span className={products.displaysize ? "value-there" : ""}>
              Display Size
            </span>
          </div>
          <div>
            <input type="text" onChange={changeValue} />
            <span className={products.color ? "value-there" : ""}>
              Color
            </span>
          </div>
          <div className="avatar">
            <label htmlFor="avatar">
              <i className="fa-solid fa-plus"></i>Add avatar
            </label>
            <input type="file" name="avatar" />
          </div>
          
        </div>
        <div className="right-input">
          <div>
            <input type="text" onChange={changeValue} />
            <span
              className={products.camera ? "value-there" : "videocard-span"}
            >
              Camera
            </span>
          </div>
          <div>
            <input type="text" onChange={changeValue} />
            <span className={products.battery ? "value-there" : ""}>
              Battery
            </span>
          </div>
          <div>
            <input type="text" onChange={changeValue} />
            <span className={products.os ? "value-there" : ""}>
              Operating System
            </span>
          </div>
          <div className="price" id="price">
            <input type="text" onChange={changeValue} />
            <span className={products.price ? "value-there" : ""}>Price</span>
          </div>
        </div>
      </div>
      <input type="submit" value="Add Product" className="add-btn" />
    </form>
  );
}