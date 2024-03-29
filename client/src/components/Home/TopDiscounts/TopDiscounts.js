import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/productService";
import "./TopDiscounts.css";
import Product from "../../Products/Product/Product";

export default function TopDiscounts() {
  const [allDiscounts, setAllDiscounts] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    async function getData() {
      let data = await getAllProducts();
      const filteredProducts = Object.values(data)
        .flatMap((category) => category)
        .filter((product) => product.discount > 0);
        console.log(filteredProducts)
      setAllDiscounts(filteredProducts);
    }
    getData();
  }, []);
  function changeIndex(type) {
    if (
      type === "+" &&
      index + 3 < allDiscounts.length &&
      allDiscounts.length > 3
    ) {
      setIndex(index + 1);
    } else if (
      index > 0 &&
      type === "-" &&
      allDiscounts.length > 3
    ) {
      setIndex(index - 1);
    }
  }
  return (
    <div className="top-discounts">
      <div className="title">
        { allDiscounts.length > 0 ? <><h1>Discounts</h1><h4>Reccomended</h4></>  : <h1>No Current Discounts</h1>}
      </div>
      {allDiscounts && (
        <section className="discounts-section">
          {allDiscounts.length > 3 && (
            <button className="switchers" onClick={() => changeIndex("-")}>
              &#60;
            </button>
          )}

          <section className="discounts__place">
            {allDiscounts[index]?._id && (
              <Product
                key={allDiscounts[index]._id}
                product={allDiscounts[index]}
              />
            )}
            {allDiscounts[index + 1]?._id && (
              <Product
                key={allDiscounts[index + 1]._id}
                product={allDiscounts[index + 1]}
              />
            )}
            {allDiscounts[index + 2]?._id && (
              <Product
                key={allDiscounts[index + 2]._id}
                product={allDiscounts[index + 2]}
              />
            )}
          </section>
          {allDiscounts.length > 3 && (
            <button className="switchers" onClick={() => changeIndex("+")}>
              &#62;
            </button>
          )}
        </section>
      )}
    </div>
  );
}
