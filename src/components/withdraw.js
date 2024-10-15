import React, { useEffect, useState } from "react";
import "../styles/actionform.css";
import { Header } from "./header";
import { WalletDropdown } from "./dropdowns";

export const Withdraw = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="withdraw_wrapper">
      <Header />

      <div className="withdraw">
        <h3>Withdraw Funds</h3>

        <input
          type="number"
          name="phone"
          required
          placeholder="Enter phone number"
        />

        <input
          type="number"
          name="amount"
          required
          placeholder="Enter amount"
        />

        <WalletDropdown selected={selected} setSelected={setSelected} />

        <input type="number" name="amount" required placeholder="Enter token" />

        <button>Withdraw Now</button>
      </div>
    </div>
  );
};
