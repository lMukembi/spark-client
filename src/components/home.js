import React from "react";
import { Login } from "./login";
import "../styles/home.css";
import { Header } from "./header";
import { Welcome } from "./welcome";
import { Package } from "./package";
import { Referal } from "./Referal";
import { Transactions } from "./transactions";
import { Earnings } from "./earnings";

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
    </div>
    //   ) : (
    //     <Login />
    //   )}
    // </>
  );
};
