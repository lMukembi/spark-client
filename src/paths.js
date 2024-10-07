import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { ForgotPassword } from "./components/forgotPassword";
import { Signup } from "./components/signup";
import { Account } from "./components/account";
import { Login } from "./components/login";

const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recover" element={<ForgotPassword />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/account/:id" element={<Account />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Paths;
