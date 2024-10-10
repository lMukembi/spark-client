import React from "react";
import "../styles/capitalform.css";
import { Header } from "./header";

export const Capitalform = () => {
  return (
    <div className="capitalwrapper">
      <Header />

      <div className="capital">
        <h3>Apply Your Investment</h3>

        <input type="text" name="username" required placeholder="How long" />

        <input type="number" name="amount" required placeholder="KES 0.00" />

        <div className="capitalprofit">Your profit: 13000.00 KES </div>

        <button>Invest now</button>
      </div>
    </div>
  );
};
