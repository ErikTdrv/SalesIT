import React, { useState } from "react";

export default function MonitorProduct() {
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
            <span className={products.manufacturer ? "value-there" : ""}>
              Manufacturer
            </span>
          </div>
          <div>
            <input type="text" onChange={changeValue} />
            <span className={products.screen_resolution ? "value-there" : ""}>
              Screen Resolution
            </span>
          </div>
          <div>
            <input type="text" onChange={changeValue} />
            <span className={products.resolution ? "value-there" : ""}>
              Resolution
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
              className={products.refreshrate ? "value-there" : "videocard-span"}
            >
              Refresh Rate
            </span>
          </div>
          <div>
            <input type="text" onChange={changeValue} />
            <span className={products.paneltype ? "value-there" : ""}>
              Panel Type
            </span>
          </div>
          <div className="price" id="price">
            <input type="text" onChange={changeValue} />
            <span className={products.os ? "value-there" : ""}>Price</span>
          </div>
        </div>
      </div>
      <input type="submit" value="Add Product" className="add-btn" />
    </form>
  );
}
