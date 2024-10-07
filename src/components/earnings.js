import React from "react";
import "../styles/earnings.css";
import { MdWhatsapp } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { ImSpinner9 } from "react-icons/im";
import { IoCashOutline } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { TbPigMoney } from "react-icons/tb";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";

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
          <div>KES 0.0</div>
          <br />
          <div>Total Whatsapp Withdrawal</div>
          <div>KES 0.0</div>
        </div>

        <div className="cashback">
          <div className="cashbacktop">
            <IoCashOutline className="cashbackicon" />
            Cashback Balance
          </div>
          <div>KES 0.0</div>
          <br />
          <div>Total Cashback Withdrawal</div>
          <div>KES 0.0</div>
        </div>

        <div className="spin">
          <div className="spintop">
            <ImSpinner9 className="spinicon" />
            Spinning Balance
          </div>
          <div>KES 0.0</div>
        </div>

        <div className="invest">
          <div className="investtop">
            <VscGraph className="investicon" />
            Invested Balance
          </div>
          <div>KES 0.0</div>
        </div>

        <div className="academic">
          <div className="academictop">
            <FaMoneyBillTrendUp className="academicicon" />
            Academic Balance
          </div>
          <div>KES 0.0</div>
        </div>

        <div className="deposit">
          <div className="deposittop">
            <TbPigMoney className="depositicon" />
            Deposit Balance
          </div>
          <div>KES 0.0</div>
        </div>

        <div className="total">
          <div className="totaltop">
            <MdOutlineAccountBalanceWallet className="totalicon" />
            Total Withdrawn
          </div>
          <div>KES 0.0</div>
        </div>

        <div className="accountbal">
          <div className="accounttop">
            <FaMoneyBillTransfer className="accounticon" />
            <div>Account Balance</div>
          </div>
          <div>KES 0.0</div>
        </div>
      </div>
    </div>
  );
};
