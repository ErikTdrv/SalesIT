import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/productService";
import Computer from "../../Computer/Computer";
import "./TopDiscounts.css";

export default function TopDiscounts() {
  const [computers, setComputers] = useState([]);
  const [monitors, setMonitors] = useState([]);
  const [phones, setPhones] = useState([]);

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
        {computers &&
          computers.map((computer) => {
            if (computer.discount > 0) {
              return <Computer key={computer._id} product={computer} />;
            }
          })}
        {monitors &&
          monitors.map((monitor) => {
            if (monitor.discount > 0) {
              return <Computer key={monitor._id} product={monitor} />;
            }
          })}
        {phones &&
          phones.map((phone) => {
            if (phone.discount > 0) {
              return <Computer key={phone._id} product={phone} />;
            }
          })}
      </section>
    </div>
  );
}
