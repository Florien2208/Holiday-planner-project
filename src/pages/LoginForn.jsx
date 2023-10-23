import React, { useState } from "react";
import "../pages/LoginForm.css";
import logoIconblack from "../images/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginForn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO: Implement login logic here
    const userData = {
      email,
      password,
    };
    try {
      const response = await fetch(
        "https://holidayplanner.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      if (response.ok) {
        // Instead of using useHistory, use the Link component for navigation
        // return <Link to="/dashboard" />;
        navigate("/dashboard");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while logging in.");
    }
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
              <h3 style={{ color: "black" }}>
                Does not have an account before?
              </h3>
              <Link to="/SignupForm" style={{ color: "black" }}>
                <h2 style={{ color: "blue" }}> Signup</h2>
              </Link>
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
              <Link to="/forgot-password" style={{ color: "black" }}>
                Forgot Password
              </Link>
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
              </label>
              {"  "}
              Remember Me
            </div>
            <button type="submit">Login</button>
            <br />
            <br />
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForn;
