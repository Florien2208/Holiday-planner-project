import { useState } from "react";
import "../pages/LoginForm.css";
import logoIconblack from "../images/logo.png";
import mg from "../pages/image9.jpg";
import axios from "axios"; // Import Axios
import mg1 from "../pages/image9.jpg";
import { Link } from "react-router-dom";
const SignupForm = () => {
  const [fullNames, setfullNames] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO: Implement signup logic here

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://holiday-planer-project.onrender.com/holidays/users/signup",
        {
          fullNames,
          email,
          phoneNo,
          password,
        }
      );

      // Handle the response here, e.g., show a success message or redirect to login page
      console.log("User registered successfully", response.data);
      alert("registered successfully");
      // Clear the
      setfullNames("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      // Handle API errors, e.g., display an error message
      console.error("Error during registration", error);
    }
  };
  return (
    <>
      <div className="seen">
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
            {/* <div className="form-links">
              <h3 style={{ color: "black" }}>Back to</h3>
              <Link to="/LoginForn" style={{ color: "black" }}>
                <h2 style={{ color: "blue" }}> Login</h2>
              </Link>
            </div> */}
            <br />
            <br />
            Full Names
            <input
              type="text"
              placeholder="full name"
              value={fullNames}
              onChange={(event) => setfullNames(event.target.value)}
            />
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
            Phone number
            <input
              type="numbers"
              placeholder="phone number"
              value={phoneNo}
              onChange={(event) => setPhone(event.target.value)}
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
            <br />
            <br />
            <div className="form-links">
              <h3 style={{ color: "black" }}>Back to</h3>
              <Link to="/LoginForn" style={{ color: "black" }}>
                <h2 style={{ color: "blue" }}> Login</h2>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
