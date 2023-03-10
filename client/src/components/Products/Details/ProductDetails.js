import React, { useEffect, useState } from "react";
import { getOneProduct } from "../../../services/productService";
import "./ProductDetails.css";

export default function ProductDetails() {
    let imagesArray = []
  let [index, setIndex] = useState(0);
  let [product, setProduct] = useState({})
  let [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function getData() {
        let data = await getOneProduct('6404c288b245e27ec121700b');
        setProduct(data)
        setIsLoading(false)
    }
    getData();
  }, []);
  return (
    <>
    { isLoading == false ?  
    <div className="details-container">
      <div className="edit-image-div">
        <img src={product.images[0].imageUrl || ''} alt="" className="details__image" />
        <div className="image__switcher">
          <button onClick={() => setIndex(index - 1)}>&#60;</button>
          <section className="image__section">
            <div className="div">
              <img src={imagesArray[index]} alt="" />
            </div>
            <div className="div"> <img src={imagesArray[index + 1]} alt="" /></div>
            <div className="div"> <img src={imagesArray[index + 2]} alt="" /></div>
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
      <div className="info-div">
        {product?.manufacturer && <h1>{product.manufacturer}</h1>}
        {product?.phonename && <h1>{product.phonename}</h1>}
        <div className="characteristics">
            
            <div className="left">
            {product?.motherboard && <span>Motherboard: {product.motherboard}</span>}
            {product?.processor && <span>Processor: {product.processor}</span>}
            {product?.videocard && <span>Videocard: {product.videocard}</span>}
            {product?.ssd && <span>SSD: {product.ssd}</span>}
            {product?.os && <span>Operation System: {product.os}</span>}
            {product?.harddrive && <span>Harddrive: {product.harddrive}</span>}
            {product?.camera && <span>Camera: {product.camera}</span>}
            {product?.color && <span>Color: {product.color}</span>}
            {product?.capacity && <span>Capacity: {product.capacity}</span>}
            {product?.displaysize && <span>Display Size: {product.displaysize}</span>}
            {product?.Battery && <span>Videocard: {product.Battery}</span>}
            {product?.screenresolution && <span>Screen Resolution: {product.screenresolution}</span>}
            {product?.paneltype && <span>Panel Type: {product.paneltype}</span>}
            {product?.resolution && <span>Resolution: {product.resolution}</span>}
            {product?.refreshrate && <span>Refresh Rate: {product.refreshrate}</span>}
            </div>

        </div>
      </div>
    </div> : <h1>IS LOADING</h1>}
    </>
    
  );
}
