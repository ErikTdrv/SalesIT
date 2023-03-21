import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../../services/productService";
import ComputerProduct from "../ProductsType/ComputerProduct";
import Monitor from "../ProductsType/Monitor";
import PhoneProduct from "../ProductsType/Phone";

export default function EditProduct() {
  let { productId } = useParams();
  const [productType, setProductType] = useState();
  const [product, setProduct] = useState();
  useEffect(() => {
    async function getProductData() {
      let data = await getOneProduct(productId);
      if (data?.phonename) {
        setProductType("Phones");
      } else if (data?.paneltype) {
        setProductType("Monitors");
      } else if (data?.motherboard) {
        setProductType("Computers");
      }
      setProduct(data);
    }
    getProductData();
  }, []);
  return (
    <>
      <div className="add-container">
        <h1>Edit Product</h1>
        {productType === "Computers" && (
          <ComputerProduct key={productId} mode={"edit"} data={product} />
        )}
        {productType === "Monitors" && (
          <Monitor key={productId} mode={"edit"} data={product} />
        )}
        {productType === "Phones" && (
          <PhoneProduct key={productId} mode={"edit"} data={product} />
        )}
      </div>
    </>
  );
}
