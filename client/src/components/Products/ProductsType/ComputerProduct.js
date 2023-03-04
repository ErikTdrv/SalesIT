import React, { useState } from "react";
import { addProduct } from "../../../services/productService";

export default function ComputerProduct() {
  let [products, setProducts] = useState({});
  async function onAddHandler(e) {
    e.preventDefault();
    addProduct(products);
  }
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
  return (
    <>
      <form className="add-form" onSubmit={onAddHandler}>
        <div className="inputs">
          <div className="left-input">
            <div className="manufacturer">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, manufacturer: e.target.value })
                }
              />
              <span className={products.manufacturer ? "value-there" : ""}>
                Manufacturer
              </span>
            </div>
            <div className="motherboard">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, motherboard: e.target.value })
                }
              />
              <span className={products.motherboard ? "value-there" : ""}>
                Motherboard
              </span>
            </div>
            <div className="processor">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, processor: e.target.value })
                }
              />
              <span className={products.processor ? "value-there" : ""}>
                Processor
              </span>
            </div>
            <div className="videocard">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, videocard: e.target.value })
                }
              />
              <span className={products.videocard ? "value-there" : ""}>
                Videocard
              </span>
            </div>
            <div className="avatar">
              <label htmlFor="avatar">
                <i className="fa-solid fa-plus"></i>Add Image
              </label>
              <input
                type="file"
                multiple
                name="avatar"
                id="avatar"
                onChange={async (e) =>
                  setProducts({
                    ...products,
                    computerImages: await Promise.all(
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
            <div className="os">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, os: e.target.value })
                }
              />
              <span className={products.os ? "value-there" : ""}>
                Operation System
              </span>
            </div>
            <div className="ssd">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, ssd: e.target.value })
                }
              />
              <span className={products.ssd ? "value-there" : ""}>SSD</span>
            </div>
            <div className="harddrive">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, harddrive: e.target.value })
                }
              />
              <span className={products.harddrive ? "value-there" : ""}>
                Hard Drive
              </span>
            </div>
            <div className="price" id="price">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, price: e.target.value })
                }
              />
              <span className={products.price ? "value-there" : ""}>Price</span>
            </div>
          </div>
        </div>
        {products.computerImages && (
          <div className="images">
            {products.computerImages.map(e => <img src={e} className="mini-img" alt="" />)}
          </div>
        )}

        <input type="submit" value="Add Product" className="add-btn" />
      </form>
    </>
  );
}
