import React, { useState } from "react";
import { addProduct } from "../../../services/productService";

export default function MonitorProduct() {
  let [products, setProducts] = useState({});
  async function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  async function addMonitorHandler(e){
    e.preventDefault()
    console.log(products)
    // addProduct(products, "Monitors");
  }
  return (
    <>
    <form className="add-form" onSubmit={addMonitorHandler}>
      <div className="inputs">
        <div className="left-input">
          <div>
            <input type="text" onChange={(e) =>
                    setProducts({ ...products, manufacturer: e.target.value })
                  } />
            <span className={products.manufacturer ? "value-there" : ""}>
              Manufacturer
            </span>
          </div>
          <div>
            <input type="text" onChange={(e) =>
                    setProducts({ ...products, screenresolution: e.target.value })
                  } />
            <span className={products.screen_resolution ? "value-there" : ""}>
              Screen Resolution
            </span>
          </div>
          <div>
            <input type="text" onChange={(e) =>
                    setProducts({ ...products, resolution: e.target.value })
                  } />
            <span className={products.resolution ? "value-there" : ""}>
              Resolution
            </span>
          </div>
          <div className="avatar">
            <label htmlFor="avatar">
              <i className="fa-solid fa-plus"></i>Add avatar
            </label>
            <input
                type="file"
                multiple
                name="avatar"
                id="avatar"
                onChange={async (e) =>
                  setProducts({
                    ...products,
                    images: await Promise.all(
                      Array.from(e.target.files).map(
                        async (e) => await convertToBase64(e)
                      )
                    ),
                  })
                }
              />
          </div>
        </div>
        <div className="right-input">
          <div>
            <input type="text" onChange={(e) =>
                    setProducts({ ...products, refreshrate: e.target.value })
                  } />
            <span
              className={products.refreshrate ? "value-there" : "videocard-span"}
            >
              Refresh Rate
            </span>
          </div>
          <div>
            <input type="text" onChange={(e) =>
                    setProducts({ ...products, paneltype: e.target.value })
                  } />
            <span className={products.paneltype ? "value-there" : ""}>
              Panel Type
            </span>
          </div>
          <div className="price" id="price">
            <input type="text" onChange={(e) =>
                    setProducts({ ...products, os: e.target.value })
                  } />
            <span className={products.os ? "value-there" : ""}>Price</span>
          </div>
        </div>
      </div>
      <input type="submit" value="Add Product" className="add-btn" />
    </form>
    {products.images && (
          <div className="images">
            {products.images.map((e) => (
              <img src={e} className="mini-img" alt="" />
            ))}
          </div>
        )}
    </>
  );
}
