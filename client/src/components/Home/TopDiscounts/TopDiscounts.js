import React from "react";
import Computer from "../../Computer/Computer";
import "./TopDiscounts.css";

export default function TopDiscounts() {
  return (
    <div className="top-discounts">
      <div className="title">
        <h1>Top Discounts</h1>
        <h4>Reccomended</h4>
      </div>
      <section className="discounts-section">
      <Computer/>
      <Computer/>
      <Computer/>
      <Computer/>
      </section>
    </div>
  );
}
