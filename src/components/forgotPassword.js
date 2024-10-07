import React from "react";
import { Link } from "react-router-dom";
import Crown from "../resources/Crown.jpg";
import "../styles/login.css";
import { Signup } from "./signup";

export const ForgotPassword = () => {
  return (
    <div className="loginwrapper">
      <div className="header">
        <img src={Crown} alt="" />
        <h2>Spark Agencies</h2>
      </div>
      <hr />
      <form className="login">
        <input type="text" name="email" required placeholder="Enter email" />

        <button>Recover</button>

        <div className="logininfo">
          <div>
            <Link to="/login" className="link">
              Login
            </Link>
          </div>
          <div>
            <Link to="/signup" className="link">
              Signup
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
