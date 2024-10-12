import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { ForgotPassword } from "./components/forgotPassword";
import { Signup } from "./components/signup";
import { Account } from "./components/account";
import { Login } from "./components/login";
import { Capital } from "./components/capital";
import { AllTransactions } from "./components/alltransactions";
import { Recharge } from "./components/recharge";
import { Transfer } from "./components/transfer";
import { Withdraw } from "./components/withdraw";

const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recover" element={<ForgotPassword />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/account/:id" element={<Account />} />
      <Route path="/login" element={<Login />} />
      <Route path="/capital" element={<Capital />} />
      <Route path="/transactions" element={<AllTransactions />} />
      <Route path="/recharge" element={<Recharge />} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/withdraw" element={<Withdraw />} />
    </Routes>
  );
};

export default Paths;
