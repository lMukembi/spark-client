import React, { useState } from "react";
import "../styles/dropdown.css";
import { MdOutlineArrowDropDown } from "react-icons/md";

export const InvestDropdown = ({ selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const investOptions = [1, 2, 3, 4, 5];

  return (
    <div className="dropdown">
      <div className="dropdown_btn" onClick={(e) => setIsOpen(!isOpen)}>
        Choose Period
        <MdOutlineArrowDropDown />
      </div>
      {isOpen && (
        <div className="dropdown_items">
          {investOptions.map((investOption) => (
            <div
              onClick={(e) => {
                setSelected(investOption);
                setIsOpen(false);
              }}
              className="dropdown_item"
            >
              {investOption} Days
            </div>
          ))}
          <div onClick={(e) => setIsOpen(false)} className="dropdown_close" />
        </div>
      )}
    </div>
  );
};

export const WalletDropdown = ({ selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const walletOptions = ["Whatsapp", "Investment", "Academic", "Spinning"];

  return (
    <div className="dropdown">
      <div className="dropdown_btn" onClick={(e) => setIsOpen(!isOpen)}>
        Choose Wallet
        <MdOutlineArrowDropDown />
      </div>
      {isOpen && (
        <div className="dropdown_items">
          {walletOptions.map((walletOption) => (
            <div
              onClick={(e) => {
                setSelected(walletOption);
                setIsOpen(false);
              }}
              className="dropdown_item"
            >
              {walletOption} Money
            </div>
          ))}
          <div onClick={(e) => setIsOpen(false)} className="dropdown_close" />
        </div>
      )}
    </div>
  );
};

export const TransferDropdown = ({ selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const transferOptions = ["Account Balance", "Mpesa"];

  return (
    <div className="dropdown">
      <div className="dropdown_btn" onClick={(e) => setIsOpen(!isOpen)}>
        Choose Account
        <MdOutlineArrowDropDown />
      </div>
      {isOpen && (
        <div className="dropdown_items">
          {transferOptions.map((transferOption) => (
            <div
              onClick={(e) => {
                setSelected(transferOption);
                setIsOpen(false);
              }}
              className="dropdown_item"
            >
              {transferOption}
            </div>
          ))}
          <div onClick={(e) => setIsOpen(false)} className="dropdown_close" />
        </div>
      )}
    </div>
  );
};
