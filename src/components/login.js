import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.jpg";
import "../styles/login.css";

export const Login = () => {
  return (
    <div className="loginwrapper">
      <div className="header">
        <img src={Logo} alt="" />
        <h2>Spark Agencies</h2>
      </div>
      <hr />
      <form className="login">
        <input type="text" name="email" required placeholder="Enter email" />
        <input
          type="text"
          name="password"
          required
          placeholder="Enter password"
        />

        <button>Login</button>

        <div className="logininfo">
          <div>
            Don't have an account?
            <Link to="/signup" className="link">
              Signup
            </Link>
          </div>
        </div>
        <div className="logininfo">
          <div>
            <Link to="/recover" className="link">
              Forgot password?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
