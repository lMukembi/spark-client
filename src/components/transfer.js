import React, { useState } from "react";
import "../styles/actionform.css";
import { Header } from "./header";
import { TransferDropdown } from "./dropdowns";

export const Transfer = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="transfer_wrapper">
      <Header />

      <div className="transfer">
        <h3>Transfer Funds</h3>

        <input
          type="text"
          name="username"
          required
          placeholder="Enter username"
        />

        <input
          type="number"
          name="amount"
          required
          placeholder="Enter amount"
        />

        <TransferDropdown selected={selected} setSelected={setSelected} />

        <button>Transfer</button>
      </div>
    </div>
  );
};
