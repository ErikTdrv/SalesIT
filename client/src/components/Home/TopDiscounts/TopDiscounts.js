import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/productService";
import Computer from "../../Computer/Computer";
import "./TopDiscounts.css";

export default function TopDiscounts() {
  const [computers, setComputers] = useState([]);
  const [monitors, setMonitors] = useState([]);
  const [phones, setPhones] = useState([]);
  const [productLength, setProductLength] = useState(0);
  const [allDiscounts, setAllDiscounts] = useState([]);
  const [index, setIndex] = useState(0);
  function changeIndex(type) {
    if (index === 0 && type === "+" && index + 1 < allDiscounts.length && allDiscounts.length > 3) {
      setIndex(index + 1);
    } else if (index > 0 && type === "-" && index + 1 < allDiscounts.length && allDiscounts.length > 3) {
      setIndex(index - 1);
    }
  }
  useEffect(() => {
    async function getData() {
      let data = await getAllProducts();
      const { computers, phones, monitors } = data;
      setComputers(computers);
      setMonitors(monitors);
      setPhones(phones);
      const filteredProducts = Object.values(data)
        .flatMap((category) => category)
        .filter((product) => product.discount >= 0);
      setAllDiscounts(filteredProducts);
    }
    getData();
  }, []);
  return (
    <div className="top-discounts">
      <div className="title">
        <h1>Top Discounts</h1>
        <h4>Reccomended</h4>
      </div>
      {allDiscounts && (
        <section className="discounts-section">
          <button className="switchers" onClick={() => changeIndex("-")}>
            &#60;
          </button>
          <section className="discounts__place">
            { allDiscounts[index]?._id && <Computer key={allDiscounts[index]._id} product={allDiscounts[index]} />}
            { allDiscounts[index + 1]?._id && <Computer key={allDiscounts[index + 1]._id} product={allDiscounts[index + 1]} />}
            { allDiscounts[index + 2]?._id && <Computer key={allDiscounts[index + 2]._id} product={allDiscounts[index + 2]} />}
          </section>
          <button className="switchers" onClick={() => changeIndex("+")}>
            &#62;
          </button>
        </section>
      )}
    </div>
  );
}
