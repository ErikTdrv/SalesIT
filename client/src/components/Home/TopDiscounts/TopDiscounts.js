import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/productService";
import Computer from "../../Computer/Computer";
import "./TopDiscounts.css";

export default function TopDiscounts() {
  const [computers, setComputers] = useState([]);
  const [monitors, setMonitors] = useState([]);
  const [phones, setPhones] = useState([]);
  const [productLength, setProductLength] = useState(0);
  const [biggestDiscounts, setBiggestDiscounts] = useState([]);
  function changeIndex(type){

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
        .filter((product) => product.discount >= 50);
      setBiggestDiscounts(filteredProducts)
    }
    getData();
  }, []);
  return (
    <div className="top-discounts">
      <div className="title">
        <h1>Top Discounts</h1>
        <h4>Reccomended</h4>
      </div>
      <section className="discounts-section">
        <button className="switchers" onClick={() => changeIndex("-")}>&#60;</button>
        <section className="discounts__place">

        </section>
        <button className="switchers" onClick={() => changeIndex("-")}>&#62;</button>
        {/* {
          biggestDiscounts.map((product) => {
            return <Computer key={product._id} product={product} />;
          })
        } */}
      </section>
    </div>
  );
}
