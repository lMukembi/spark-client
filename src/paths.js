import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { ForgotPassword } from "./components/forgotPassword";
import { Signup } from "./components/signup";
import { Account } from "./components/account";
import { Login } from "./components/login";
import { Capitalform } from "./components/capitalform";
import { AllTransactions } from "./components/alltransactions";

const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recover" element={<ForgotPassword />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/account/:id" element={<Account />} />
      <Route path="/login" element={<Login />} />
      <Route path="/capital" element={<Capitalform />} />
      <Route path="/transactions" element={<AllTransactions />} />
    </Routes>
  );
};

export default Paths;
