import React, { useState } from "react";
import "../pages/LoginForm.css";
import logoIconblack from "../images/logo.png";
import mg from "../pages/image9.jpg";
import mg1 from "../pages/image9.jpg";
import { Link } from "react-router-dom";
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement signup logic here
  };

  return (
    <>
      <div className="seen" style={{ backgroundColor: `url(${mg})` }}>
        <form
          onSubmit={handleSubmit}
          className="signup-form"
          style={{ backgroundColor: `#eaecef` }}
        >
          <div>
            <Link to="/">
              <img src={logoIconblack} alt="logo-icon-white" />
            </Link>
          </div>
          <div className="form-left">
            <h1 style={{ color: "black" }}>Signup Form</h1>

            {/* Add Login link at the top */}
            <div className="form-links">
              <h3 style={{ color: "black" }}>Back to</h3>
              <a href="/LoginForn">Login</a>
            </div>
            <br />
            <br />
            Email
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <br />
            Password
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <br />
            Confirm Password
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <br />
            <br />
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
