import React, { useEffect, useState,  } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { deleteOneProduct, getOneProduct } from "../../../services/productService";
import "./ProductDetails.css";

export default function ProductDetails() {
  let imagesArray = [];
  let { productId } = useParams()
  let [index, setIndex] = useState(1);
  let [product, setProduct] = useState({});
  let [isLoading, setIsLoading] = useState(true);
  let [productType, setProductType] = useState('');
  let navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      let data = await getOneProduct(productId);
      setProduct(data);
      setIsLoading(false);
      if(data.phonename){
        setProductType('phones')
      }else if(data.paneltype){
        setProductType('Monitors')
      }else if(data.motherboard){
        setProductType('Computers')
      }
    }
    getData();
  }, []);
  function changeIndex(type){
    if(index === 0 && type === '+' && index + 1 < product.images.length){
      setIndex(index + 1)
    }else if(index > 0 && type === '-' && index + 1 < product.images.length){
      setIndex(index - 1)
    }
  }
  async function deleteProduct(){
    let request = await deleteOneProduct(product._id , productType)
    navigate('/all-products')
  }
  return (
    <>
      {isLoading == false ? (
        <div className="details-container">
          <div className="edit-image-div">
            <img
              src={product.images[0].imageUrl || ""}
              alt=""
              className="details__image"
            />
            { product?.images[1] && 
            <div className="image__switcher">
              <button onClick={() => changeIndex('-')}>&#60;</button>
              <section className="image__section">
                <div className="div">
                  <img src={product.images[index]?.imageUrl} className="images" alt="" />
                </div>
                <div className="div">
                  <img src={product.images[index + 1]?.imageUrl} className="images" alt="" />
                </div>
                <div className="div">
                  <img src={product.images[index + 2]?.imageUrl} className="images" alt="" />
                </div>
              </section>
              <button onClick={() => changeIndex('+')}>&#62;</button>
            </div>}
            
            <div className="buttons">
              <button>Back</button>
              <button onClick={deleteProduct}>Delete</button>
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
                {product?.motherboard && (
                  <span><p>Motherboard:</p> {product.motherboard}</span>
                )}
                {product?.processor && (
                  <span><p>Processor:</p> {product.processor}</span>
                )}
                {product?.videocard && (
                  <span><p>Videocard:</p> {product.videocard}</span>
                )}
                {product?.ssd && <span><p>SSD:</p> {product.ssd}</span>}
                {product?.os && <span><p>Operation System:</p> {product.os}</span>}
                {product?.harddrive && (
                  <span><p>Harddrive:</p> {product.harddrive}</span>
                )}
                {product?.camera && <span><p>Camera:</p> {product.camera}</span>}
                {product?.color && <span><p>Color:</p> {product.color}</span>}
                {product?.capacity && <span><p>Capacity:</p> {product.capacity}</span>}
                {product?.displaysize && (
                  <span><p>Display Size:</p> {product.displaysize}</span>
                )}
                {product?.Battery && <span><p>Videocard:</p> {product.Battery}</span>}
                {product?.screenresolution && (
                  <span><p>Screen Resolution:</p> {product.screenresolution}</span>
                )}
                {product?.paneltype && (
                  <span><p>Panel Type:</p> {product.paneltype}</span>
                )}
                {product?.resolution && (
                  <span><p>Resolution:</p> {product.resolution}</span>
                )}
                {product?.refreshrate && (
                  <span><p>Refresh Rate:</p> {product.refreshrate}</span>
                )}
              </div>
            </div>
            <div className="price">
              <span><p>Price: </p>{product.price}$</span>
            </div>
          </div>
        </div>
      ) : (
        <h1>IS LOADING</h1>
      )}
    </>
  );
}
