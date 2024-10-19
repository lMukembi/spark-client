import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo.jpg";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import axios from "axios";
import "../styles/login.css";
import { Home } from "./home";

const apexAPI = "http://localhost:8000";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [successfulLogin, setSuccessfulLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const processLogin = async (e) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "application/json",
    };

    const config = {
      headers: headers,
    };

    const res = await axios.post(
      `${apexAPI}/api/user/login`,
      {
        email,
        password,
      },
      config
    );

    if (res.data.status === true) {
      localStorage.setItem("newUser", JSON.stringify(res.data));
      setSuccessfulLogin(true);
      alert("Loggedin successfully!");
      navigate("/");
    } else {
      setSuccessfulLogin(false);
      alert("Something went wrong!");
    }
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  useEffect(() => {
    setSuccessfulLogin(false);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (successfulLogin) {
    return <Home />;
  }
  return (
    <div className="loginwrapper">
      <div className="header">
        <img src={Logo} alt="" />
        <h2>Apex Adverts</h2>
      </div>
      <hr />
      <form onSubmit={processLogin} className="login">
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
