import React from "react";
import "../styles/alltransactions.css";
import { GrTransaction } from "react-icons/gr";

export const TransactionCard = () => {
  return (
    <div className="transaction_details">
      <div className="transaction_time_icon">
        <GrTransaction className="transaction_icon" />
        <div className="transaction_time">
          <div className="transaction_text_amt">Deposit</div>
          <div className="transaction_info">1:03 PM - Sun, 6 Oct</div>
        </div>
      </div>
      <div>
        <div className="transaction_amt">
          <div className="transaction_text_amt">-15,600.00 KES</div>
          <div className="transaction_info confirm">Confirmed</div>
        </div>
      </div>
    </div>
  );
};
