import React from "react";
import Logo from "../assets/images/Logo.jpg";
import "../styles/menu.css";
import { MdClose, MdOutlineCurrencyExchange } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";
import { RxBackpack, RxDashboard } from "react-icons/rx";
import { MdOutlineReceiptLong } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { LuContact2 } from "react-icons/lu";
import { PiHandDepositBold, PiLockKeyOpenBold } from "react-icons/pi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoPeopleOutline } from "react-icons/io5";

export const Menu = ({ close }) => {
  function logoutUser() {
    localStorage.clear();
    Navigate("/login");
  }
  return (
    <>
      <div className="menu">
        <div className="header">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <h2>Spark Agencies</h2>
          <MdClose className="menugoback" onClick={() => close()} />
        </div>
        <hr />
        <div className="menuitems">
          <Link to="/" onClick={() => close()}>
            <div className="menuitem">
              <RxDashboard className="menicon" /> Dashboard
            </div>
          </Link>

          <Link to="/capital" onClick={() => close()}>
            <div className="menuitem">
              <VscGraph className="menicon" /> Capital
            </div>
          </Link>

          <Link to="/transactions" onClick={() => close()}>
            <div className="menuitem">
              <MdOutlineReceiptLong className="menicon" /> Transactions
            </div>
          </Link>

          <Link to="/recharge" onClick={() => close()}>
            <div className="menuitem">
              <PiHandDepositBold className="menicon" /> Recharge
            </div>
          </Link>

          <Link to="/transfer" onClick={() => close()}>
            <div className="menuitem">
              <FaMoneyBillTransfer className="menicon" /> Transfer
            </div>
          </Link>

          <Link to="/withdraw" onClick={() => close()}>
            <div className="menuitem">
              <MdOutlineCurrencyExchange className="menicon" /> Withdraw
            </div>
          </Link>

          <Link to="/team" onClick={() => close()}>
            <div className="menuitem">
              <IoPeopleOutline className="menicon" /> Team
            </div>
          </Link>

          <Link to="/package" onClick={() => close()}>
            <div className="menuitem">
              <RxBackpack className="menicon" /> Service Package
            </div>
          </Link>

          <Link to="/token" onClick={() => close()}>
            <div className="menuitem">
              <PiLockKeyOpenBold className="menicon" /> Account Token
            </div>
          </Link>

          <Link to="/contact" onClick={() => close()}>
            <div className="menuitem">
              <LuContact2 className="menicon" /> Contact
            </div>
          </Link>

          <div
            onClick={() => {
              logoutUser();
              close();
            }}
            className="menuitem"
          >
            <RiLogoutCircleLine className="menicon" />
            Logout
          </div>
        </div>
      </div>
      <div onClick={() => close(false)} className="closemenu" />
    </>
  );
};
