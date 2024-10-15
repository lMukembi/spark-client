import React, { useState } from "react";
import "../styles/header.css";
import Logo from "../assets/images/Logo.jpg";
import Boss from "../assets/images/Boss.png";
import { RiMenuAddLine } from "react-icons/ri";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbSettingsPlus } from "react-icons/tb";
import { Menu } from "./menu";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="headwrapper">
        <div className="head">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <div>
            <RiMenuAddLine
              onClick={() => setMenu(!menu)}
              className="icon menuicon"
            />
            {menu && <Menu close={setMenu} />}
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
      <hr className="headhr" />
    </>
  );
};
