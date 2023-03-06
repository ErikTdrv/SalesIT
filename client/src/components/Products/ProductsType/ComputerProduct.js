import React, { useState } from "react";
import { addProduct } from "../../../services/productService";

export default function ComputerProduct() {
  let [products, setProducts] = useState({});
  let [error, setError] = useState({});
  let [disabled, setDisabled] = useState(true)
  let [mainError, setMainError] = useState('')
  async function onAddHandler(e) {
    e.preventDefault();
    let request = await addProduct(products, "Computers");
    if(request.message){
      setMainError(request.message.split(':')[2])
    }
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
  function validateInput(e, type) {
    if(e.target.value === ''){
      setError({...error, [type]: `${type} is required`})
      setDisabled(true)
    }else {
      setDisabled(false)
      setError({...error, [type]: ''})
    }
  }
  return (
    <>
      <form className="add-form" onSubmit={onAddHandler}>
      {mainError &&
      <p className="main-error">{mainError}</p>
      }
        <div className="inputs">
          <div className="left-input">
            <div className="manufacturer">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, manufacturer: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Manufacturer")}
              />
              <span className={products.manufacturer ? "value-there" : ""}>
                Manufacturer
              </span>
              {error.Manufacturer && (
                <p className="error">{error.Manufacturer}</p>
              )}
            </div>
            <div className="motherboard">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, motherboard: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Motherboard")}
              />
              <span className={products.motherboard ? "value-there" : ""}>
                Motherboard
              </span>
              {error.Motherboard && (
                <p className="error">{error.Motherboard}</p>
              )}
            </div>
            <div className="processor">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, processor: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Processor")}
              />
              <span className={products.processor ? "value-there" : ""}>
                Processor
              </span>
              {error.Processor && (
                <p className="error">{error.Processor}</p>
              )}
            </div>
            <div className="videocard">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, videocard: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Videocard")}
              />
              <span className={products.videocard ? "value-there" : ""}>
                Videocard
              </span>
              {error.Videocard && (
                <p className="error">{error.Videocard}</p>
              )}
            </div>
            <div className="avatar">
              <label htmlFor="avatar">
                <i className="fa-solid fa-plus"></i>Add Images
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
            <div className="os">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, os: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Os")}
              />
              <span className={products.os ? "value-there" : ""}>
                Operation System
              </span>
              {error.Os && (
                <p className="error">{error.Os}</p>
              )}
            </div>
            <div className="ssd">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, ssd: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Ssd")}
              />
              <span className={products.ssd ? "value-there" : ""}>SSD</span>
              {error.Ssd && (
                <p className="error">{error.Ssd}</p>
              )}
            </div>
            <div className="harddrive">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, harddrive: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Harddrive")}
              />
              <span className={products.harddrive ? "value-there" : ""}>
                Hard Drive
              </span>
              {error.Harddrive && (
                <p className="error">{error.Harddrive}</p>
              )}
            </div>
            <div className="price" id="price">
              <input
                type="text"
                onChange={(e) =>
                  setProducts({ ...products, price: e.target.value })
                }
                onBlur={(e) => validateInput(e, "Price")}
              />
              <span className={products.price ? "value-there" : ""}>Price</span>
              {error.Price && (
                <p className="error">{error.Price}</p>
              )}
            </div>
          </div>
        </div>
        {products.images && (
          <div className="images">
            {products.images.map((e) => (
              <img src={e} className="mini-img" alt="" />
            ))}
          </div>
        )}

        <input type="submit" disabled={disabled} onClick={() => setMainError('')} value="Add Product" className="add-btn" />
      </form>
    </>
  );
}
