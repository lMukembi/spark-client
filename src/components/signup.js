import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/signup.css";
import Logo from "../assets/images/Logo.jpg";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import axios from "axios";
import { Home } from "./home";

const apexAPI = "http://localhost:8000";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [successfulSignup, setSuccessfulSignup] = useState(false);

  const navigate = useNavigate();

  const processSignup = async (e) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "application/json",
    };

    const config = {
      headers: headers,
    };

    const phoneBody = phone.substring(1);

    const res = await axios.post(
      `${apexAPI}/api/user/new`,
      {
        phone: `254${phoneBody}`,
        email,
        username,
        password,
      },
      config
    );

    if (res.data.status === true) {
      localStorage.setItem("newUser", JSON.stringify(res.data));
      setSuccessfulSignup(true);
      alert("Created successfully!");
      navigate("/");
    } else {
      setSuccessfulSignup(false);
      alert("Something went wrong!");
    }
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  useEffect(() => {
    setSuccessfulSignup(false);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (successfulSignup) {
    return <Home />;
  }
  return (
    <div className="signupwrapper">
      <div className="header">
        <img src={Logo} alt="" />
        <h2>Apex Adverts</h2>
      </div>
      <hr />

      <form onSubmit={processSignup} className="signup">
        <input
          type="text"
          name="username"
          maxLength={15}
          minLength={4}
          required
          autoComplete="off"
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <input
          type="tel"
          maxLength={10}
          name="phone"
          required
          autoComplete="off"
          placeholder="Enter phone, e.g 0712xxxxx78"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />

        <input
          type="text"
          name="email"
          autoComplete="new-email"
          required
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          autoComplete="new-password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <i onClick={handleShowPassword} className="showLoginPassword">
          {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
        </i>

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
