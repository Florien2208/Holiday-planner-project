import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaTimes } from "react-icons/fa";

// import logo from "../assets/logo.png";
import whiteLogo from "../images/white-logo.png";
import logoIconwhite from "../images/logo-icon-white.svg";
import "../pages/Navbar.css";
function Navbar() {
  const [setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {" "}
      <div className="mothermodular" >
        <div className="modular">
          <div className="modular1">
            <div className="modular2">
              <div className="modular3">
                {/* =======================MODAL=========================================================                            */}
                <div className="modular4">
                  {/* {isModalOpen && ( */}
                  <div className="modular5">
                    <div className="modular6">
                      <div className="logomodular">
                        <img src={logoIconwhite} alt="logo-icon-white" />
                      </div>
                      <div className="fullmodular">
                        <div className="sitemodular">
                          <a href="index.html" title="Travel & Tour">
                            <img src={whiteLogo} alt="Logo" />
                          </a>
                        </div>
                      </div>
                      <div className="closemodular">
                        <Link to="/">
                          <button
                            className="closemodular-one"
                            onClick={closeModal}
                          >
                            <FaTimes />
                          </button>
                        </Link>
                      </div>
                      <div className="modalcontent">
                        <ul>
                          <li>
                            <Link
                              to="/"
                              className=""
                              //  onClick={closeModal}
                            >
                              Home
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/About"
                              href="/About"
                              onClick={closeModal}
                            >
                              About us
                            </Link>
                          </li>

                          <li>
                            <Link to="/Tour" onClick={closeModal}>
                              Tour
                            </Link>
                            {/* <select className="selectoptions">
                              <option value="" className="options"></option>
                              <option value="Tour" className="options">
                                Tour
                              </option>
                              <option value="Tour details" className="options">
                                Tour details
                              </option>
                            </select> */}
                          </li>

                          <li>
                            <Link to="/Contact" onClick={closeModal}>
                              Contact us
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/LoginForn"
                              href="/Login"
                              onClick={closeModal}
                            >
                              Login
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
