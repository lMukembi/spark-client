import React, { useState } from "react";
import "../styles/actionform.css";
import { Header } from "./header";
import { InvestDropdown } from "./dropdowns";

export const Capital = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="capital_wrapper">
      <Header />

      <div className="capital">
        <h3>Apply Your Investment</h3>

        <InvestDropdown selected={selected} setSelected={setSelected} />

        <input type="number" name="amount" required placeholder="KES 0.00" />

        <div className="capital_profit">Your profit: 13000.00 KES </div>

        <button>Invest Now</button>
      </div>
    </div>
  );
};
