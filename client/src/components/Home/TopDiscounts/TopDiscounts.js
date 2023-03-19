import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/productService";
import Computer from "../../Computer/Computer";
import "./TopDiscounts.css";

export default function TopDiscounts() {
  const [computers, setComputers] = useState([]);
  const [monitors, setMonitors] = useState([]);
  const [phones, setPhones] = useState([]);
  const [productLength, setProductLength] = useState(0);
  useEffect(() => {
    async function getData() {
      let data = await getAllProducts();
      const { computers, phones, monitors } = data;
      setComputers(computers);
      setMonitors(monitors);
      setPhones(phones);
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
        {computers && productLength < 5 &&
          computers.map((computer) => {
            if (computer.discount > 0) {
              setProductLength(productLength + 1);
              return <Computer key={computer._id} product={computer} />;
            }
          })}
        {monitors && productLength < 5 &&
          monitors.map((monitor) => {
            if (monitor.discount > 0) {
              setProductLength(productLength + 1);
              return <Computer key={monitor._id} product={monitor} />;
            }
          })}
        {phones && productLength < 5 &&
          phones.map((phone) => {
            if (phone.discount > 0) {
              setProductLength(productLength + 1);
              return <Computer key={phone._id} product={phone} />;
            }
          })}
      </section>
    </div>
  );
}
