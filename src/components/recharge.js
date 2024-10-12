import React from "react";
import "../styles/recharge.css";
import { Header } from "./header";
import { MdOutlineReceiptLong } from "react-icons/md";
import { TransactionCard } from "./transactioncard";

export const Recharge = () => {
  return (
    <div className="recharge_wrapper">
      <Header />

      <div className="recharge">
        <h3>Request Recharge</h3>

        <input
          type="text"
          name="username"
          required
          placeholder="Enter amount"
        />

        <input
          type="number"
          name="amount"
          required
          placeholder="Enter phone number"
        />
        <button>Recharge Now</button>
      </div>
      <div className="recharge_messages">
        <p className="recharge_messages_top">
          <MdOutlineReceiptLong />
          Recent Transactions
        </p>

        <div className="recharge_messages_container">
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </div>
        {/* <i>Your transactions records will appear here!</i> */}
      </div>
    </div>
  );
};
