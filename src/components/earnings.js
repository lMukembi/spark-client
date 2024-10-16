import React from "react";
import "../styles/earnings.css";
import { MdOutlineCurrencyExchange, MdWhatsapp } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { ImSpinner9 } from "react-icons/im";
import { IoCashOutline } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { PiHandDepositBold } from "react-icons/pi";

export const Earnings = () => {
  return (
    <div className="earningswrapper">
      <p>
        <MdSpaceDashboard />
        Dashboard
      </p>
      <div className="earningscontainer">
        <div className="whatsapp">
          <div className="whatsapptop">
            <MdWhatsapp className="whatsappicon" />
            Whatsapp Balance
          </div>
          <div>KES 0.00</div>
          <br />
          <div>Total Whatsapp Withdrawal</div>
          <div>KES 0.00</div>
        </div>

        <div className="cashback">
          <div className="cashbacktop">
            <IoCashOutline className="cashbackicon" />
            Cashback Balance
          </div>
          <div>KES 0.00</div>
          <br />
          <div>Total Cashback Withdrawal</div>
          <div>KES 0.00</div>
        </div>

        <div className="spin">
          <div className="spintop">
            <ImSpinner9 className="spinicon" />
            Spinning Balance
          </div>
          <div>KES 0.00</div>
        </div>

        <div className="invest">
          <div className="investtop">
            <VscGraph className="investicon" />
            Invested Balance
          </div>
          <div>KES 0.00</div>
        </div>

        <div className="academic">
          <div className="academictop">
            <LiaFileInvoiceDollarSolid className="academicicon" />
            Academic Balance
          </div>
          <div>KES 0.00</div>
        </div>

        <div className="deposit">
          <div className="deposittop">
            <PiHandDepositBold className="depositicon" />
            Deposit Balance
          </div>
          <div>KES 0.00</div>
        </div>

        <div className="total">
          <div className="totaltop">
            <MdOutlineCurrencyExchange className="totalicon" />
            Total Withdrawn
          </div>
          <div>KES 0.00</div>
        </div>

        <div className="accountbal">
          <div className="accounttop">
            <MdOutlineAccountBalanceWallet className="accounticon" />
            <div>Account Balance</div>
          </div>
          <div>KES 0.00</div>
        </div>
      </div>
    </div>
  );
};
