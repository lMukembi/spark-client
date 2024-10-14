import React from "react";
import "../styles/alltransactions.css";
import { GrTransaction } from "react-icons/gr";
import { Header } from "./header";

export const AllTransactions = () => {
  return (
    <div className="all_transactions_wrapper">
      <Header />
      <h3>All Transactions</h3>
      <div className="all_transactions">
        <div>
          <div className="transaction_details">
            <div className="transaction_time_icon">
              <GrTransaction className="transaction_icon" />
              <div className="transaction_time">
                <div className="transaction_text_amt">Whatsapp Withdrawal</div>
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

          <div className="transaction_details">
            <div className="transaction_time_icon">
              <GrTransaction className="transaction_icon" />
              <div className="transaction_time">
                <div className="transaction_text_amt">Whatsapp Withdrawal</div>
                <div className="transaction_info">4:25 PM - Mon, 7 Oct</div>
              </div>
            </div>
            <div>
              <div className="transaction_amt">
                <div className="transaction_text_amt">-8,100.00 KES</div>
                <div className="transaction_info confirm">Confirmed</div>
              </div>
            </div>
          </div>

          <div className="transaction_details">
            <div className="transaction_time_icon">
              <GrTransaction className="transaction_icon" />
              <div className="transaction_time">
                <div className="transaction_text_amt">Whatsapp Withdrawal</div>
                <div className="transaction_info">8:40 PM - Tue, 8 Oct</div>
              </div>
            </div>
            <div>
              <div className="transaction_amt">
                <div className="transaction_text_amt">-5,200.00 KES</div>
                <div className="transaction_info confirm">Confirmed</div>
              </div>
            </div>
          </div>

          <div className="transaction_details">
            <div className="transaction_time_icon">
              <GrTransaction className="transaction_icon" />
              <div className="transaction_time">
                <div className="transaction_text_amt">Whatsapp Withdrawal</div>
                <div className="transaction_info">11:03 AM - Wed, 9 Oct</div>
              </div>
            </div>
            <div>
              <div className="transaction_amt">
                <div className="transaction_text_amt">-11,800.00 KES</div>
                <div className="transaction_info confirm">Confirmed</div>
              </div>
            </div>
          </div>

          <div className="transaction_details">
            <div className="transaction_time_icon">
              <GrTransaction className="transaction_icon" />
              <div className="transaction_time">
                <div className="transaction_text_amt">Whatsapp Withdrawal</div>
                <div className="transaction_info">4:51 PM - Thu, 10 Oct</div>
              </div>
            </div>
            <div>
              <div className="transaction_amt">
                <div className="transaction_text_amt">-23,900.00 KES</div>
                <div className="transaction_info confirm">Confirmed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
