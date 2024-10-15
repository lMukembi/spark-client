import React from "react";
import { TbMedal2 } from "react-icons/tb";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Package = () => {
  return (
    <div className="package">
      <p>Membership Package</p>
      <div className="membership">
        <HiOutlineBadgeCheck className="membershipicon" />
        Grand Membership
      </div>
      <div className="earningsinfo">
        <h4>Wednesday's Give away Cashback🎄.</h4>
        Buy Elite package@1,000.00 KES and get awarded<i> 3,000.00 KES</i> to
        your M-pesa, buy the Prestige package @2,000.00 KES and get awarded
        <i> 6,000.00 KES</i> to your M-pesa buy the Deluxe package at
        <i> 3,500.00 KES</i> and get awarded <i>10,500.00 KES</i> to your M-pesa
        buy Grand package package
        <i> 5,500.00 KES</i> and get awarded<i> 16,500.00 KES</i> to your
        M-pesa.
      </div>
      <Link to="/package">
        <div className="upgradebtn">
          <TbMedal2 className="upgradeicon" />
          Upgrade now
        </div>
      </Link>
    </div>
  );
};
