import React from "react";
import { Login } from "./login";
import "../styles/home.css";
import { Header } from "./header";
import { Welcome } from "./welcome";
import { Package } from "./package";
import { Referal } from "./referal";
import { Transactions } from "./transactions";
import { Earnings } from "./earnings";
import { MdCopyright } from "react-icons/md";

export const Home = () => {
  const userData = JSON.parse(localStorage.getItem("newUser"));

  return (
    // <>
    //   {userData ? (
    <div className="homewrapper">
      <Header />
      <Welcome />
      <Package />
      <Earnings />
      <Transactions />
      <Referal />
      <hr className="homehr" />

      <div className="homefooter">
        <MdCopyright />
        2024, Spark Agencies
      </div>
    </div>
    //   ) : (
    //     <Login />
    //   )}
    // </>
  );
};
