import React from "react";
import { MdOutlineReceiptLong } from "react-icons/md";

export const Transactions = () => {
  return (
    <div className="transactions">
      <div className="transactionstop">
        <MdOutlineReceiptLong />
        Recent transactions
      </div>

      <i>Your transactions records will appear here!</i>
    </div>
  );
};
