import React, { useState } from "react";
import "../pages/LoginForm.css";
import {FiFacebook} from "react-icons/Fi";
import {FcGoogle} from "react-icons/Fc";
import mg from "../pages/image9.jpg";
import logoIconblack from "../images/logo.png";
import { Link } from "react-router-dom";


const LoginForn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement login logic here
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <>
      <div className="seen">
        <form onSubmit={handleSubmit} style={{ backgroundColor: `#eaecef` }}>
          <div>
            <Link to="/">
              <img src={logoIconblack} alt="logo-icon-white" />
            </Link>
          </div>
          <br />
          <div className="Test">
            <h1 style={{ color: "black" }}>Login Form</h1>
            <div className="form-links">
              <h3 style={{ color: "black" }}>Does not have account before?</h3>
              <a href="/SignupForm" style={{ color: "black" }}>
                <h2 style={{ color: "blue" }}> Signup</h2>
              </a>
            </div>
            <br />
            Email
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <div className="form-links">
              <a href="/forgot-password" style={{ color: "black" }}>
                Forgot Password
              </a>
            </div>
            <br />
            Password
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {/* Use flexbox for Remember Me checkbox and label */}
            <div className="remember-me">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
              </label>{"  "}
              Remember Me
            </div>
            <button type="submit">Login</button>
            <br />
            <br />
            {/* <div className="ico1">
              <div className="ic">
                <FiFacebook />
              </div>
              <div className="ico">
                <FcGoogle />
              </div>
            </div> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForn;
