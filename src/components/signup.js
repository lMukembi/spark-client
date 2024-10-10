import React from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";
import Crown from "../images/Crown.jpg";

export const Signup = () => {
  return (
    <div className="signupwrapper">
      <div className="header">
        <img src={Crown} alt="" />
        <h2>Spark Agencies</h2>
      </div>
      <hr />

      <form className="signup">
        <input
          type="text"
          name="username"
          required
          placeholder="Enter username"
        />

        <input
          type="number"
          name="phone number"
          maxLength={10}
          required
          placeholder="Enter phone"
        />

        <input type="text" name="email" required placeholder="Enter email" />

        <input
          type="text"
          name="password"
          required
          placeholder="Enter password"
        />

        <button>Signup</button>
        <div className="logininfo">
          <div>
            Already have an account?
            <Link to="/login" className="link">
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
