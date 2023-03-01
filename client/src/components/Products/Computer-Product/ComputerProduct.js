import React, { useState } from "react";
import './ComputerProduct.css';

export default function ComputerProduct(){
  let [products, setProducts] = useState({});
  function changeValue(e){
    if(e.target.value.length > 0){
     
    }
}
    return (
        <form className="add-form">
        <div className="inputs">
            <div className="left-input">
            <div className="manufacturer">
            <input type="text" onChange={changeValue} />
            <span className={ products.manufacturer ? "manufacturer-span value-there" : "manufacturer-span"}>Manufacturer</span>
            </div>
          <div className="motherboard">
            <input type="text" onChange={changeValue} />
            <span className={ products.motherboard ? "motherboard-span value-there" : "motherboard-span"}>Motherboard</span>
            </div>
          <div className="processor">
            <input type="text" onChange={changeValue} />
            <span className={ products.processor ? "processor-span value-there" : "processor-span"}>Processor</span>
          </div>
          <div className="videocard">
            <input type="text" onChange={changeValue} />
            <span className={ products.videocard ? "videocard-span value-there" : "videocard-span"}>Videocard</span>
          </div>
            </div>
            <div className="right-input">
          <div className="os">
            <input type="text" onChange={changeValue} />
            <span className={ products.os ? "os-span value-there" : "os-span"}>Operation System</span>
          </div>
          <div className="ssd">
            <input type="text" onChange={changeValue} />
            <span className={ products.os ? "ssd-span value-there" : "ssd-span"}>SSD</span>
          </div>
          <div className="harddrive">
            <input type="text" onChange={changeValue} />
            <span className={ products.os ? "harddrive-span value-there" : "harddrive-span"}>Hard Drive</span>
          </div>
          <div className="price" id="price">
            <input type="text" onChange={changeValue} />
            <span className={ products.os ? "price-span value-there" : "price-span"}>Price</span>
          </div>
            </div>
          </div>
          <input
              type="submit"
              value="Add Product"
              className="add-btn"
            />
      </form>
    )
}