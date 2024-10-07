import React from "react";
import "../styles/header.css";
import Crown from "../resources/Crown.jpg";
import Boss from "../resources/Boss.png";
import { RiMenuAddLine } from "react-icons/ri";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbSettingsPlus } from "react-icons/tb";

export const Header = () => {
  return (
    <>
      <div className="headwrapper">
        <div className="head">
          <img src={Crown} alt="" />
          <div>
            <RiMenuAddLine className="icon" />
          </div>
          <div>
            <MdOutlineAddShoppingCart className="icon" />
          </div>
          <div>
            <IoMdNotificationsOutline className="icon" />
          </div>
          <div>
            <TbSettingsPlus className="icon" />
          </div>
          <img src={Boss} alt="" />
        </div>
      </div>
      <hr />
    </>
  );
};
