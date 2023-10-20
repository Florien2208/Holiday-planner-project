import React from 'react'
import img from "../images/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
function Header() {
  return (
    <div>
      <header className="site-header">
        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <ul className="contact-list-item">
                  <li>
                    <a
                      href="mailto:holidayplanners@gmail.com"
                      title="holidayplanners@gmail.com"
                    >
                      <span className="icon">
                        <i className="far fa-envelope"></i>
                      </span>
                      <span className="text">holidayplanners@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:1234567890" title="+123 456 7890">
                      <span className="icon">
                        <i className="fas fa-phone-alt"></i>
                      </span>
                      <span className="text">+123 456 7890</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="header-social">
                  <li>
                    <a
                      href="FaFacebookF"
                      icon={FaFacebookF}
                      title="Follow us on Facebook"
                    >
                      <span className="icon">
                        <i className="fab fa-facebook-f"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      title="Follow us on Instagram"
                    >
                      <span className="icon">
                        <i className="fab fa-instagram"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" title="Follow us on Twitter">
                      <span className="icon">
                        <i className="fab fa-twitter"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="container">
            <div className="bottom-header-inner">
              <div className="row">
                <div className="col-lg-4">
                  <div className="site-branding">
                    <a href="#" title="Travel & Tour">
                      <img src={img} alt="Logo" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="header-menu-side">
                    <div className="header-reserve-btn for-des">
                      <a href="#" className="sec-btn" title="Reserve">
                        <span>Reserve</span>
                      </a>
                    </div>
                    <div className="search-wp">
                      <div className="search-icon">
                        <i className="fas fa-search"></i>
                        <i className="fas fa-times"></i>
                      </div>
                      <div className="search-overlay">
                        <div className="search-overlay-inner">
                          <div className="logo-icon">
                            <img
                              src="assets/images/logo-icon-white.svg"
                              alt="logo-icon-white"
                            />
                          </div>
                          <div className="container">
                            <div className="row">
                              <div className="col-10 m-auto">
                                <div className="search-inner-box">
                                  <form>
                                    <span className="form-control-span search-wrap">
                                      <input
                                        type="text"
                                        className="form-input"
                                        placeholder="Search"
                                      />
                                      <button type="submit" className="sm-btn">
                                        <i className="fas fa-search"></i>
                                      </button>
                                    </span>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="main-navigation">
                      {" "}
                      <Link to="/Navbar">
                        <button type="button" className="navigation-btn">
                          <span className="first"></span>
                          <span className="second"></span>
                          <span className="third"></span>
                        </button>{" "}
                      </Link>
                      <div className="full-menu">
                        <div className="logo-icon">
                          <img
                            src="assets/images/logo-icon-white.svg"
                            alt="logo-icon-white"
                          />
                        </div>
                        <div className="container">
                          <div className="full-menu-logo-row">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="site-branding">
                                  <a href="index.html" title="Travel & Tour">
                                    <img
                                      src="assets/images/white-logo.png"
                                      alt="Logo"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-5">
                              <div className="menu-container">
                                <ul>
                                  <li className="active">
                                    <a href="index.html">Home</a>
                                  </li>
                                  <li>
                                    <a href="about.html">About</a>
                                  </li>
                                  <li className="dropdown-items">
                                    <a href="javascript:void(0);">
                                      Destination
                                    </a>
                                    <ul className="sub-menu">
                                      <li>
                                        <a href="destination.html">
                                          Destination
                                        </a>
                                      </li>
                                      <li>
                                        <a href="destination-detail.html">
                                          Destination Detail
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="dropdown-items">
                                    <a href="javascript:void(0);">Tour</a>
                                    <ul className="sub-menu">
                                      <li>
                                        <a href="tour.html">Tour</a>
                                      </li>
                                      <li>
                                        <a href="tour-detail.html">
                                          Tour Detail
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="dropdown-items">
                                    <a href="javascript:void(0);">Blog</a>
                                    <ul className="sub-menu">
                                      <li>
                                        <a href="blog.html">Blog</a>
                                      </li>
                                      <li>
                                        <a href="blog-detail.html">
                                          Blog Detail
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="contact.html">Contact us</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="full-menu-social">
                                <ul>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      title="Follow us on Facebook"
                                    >
                                      <span className="icon">
                                        <i className="fab fa-facebook-f"></i>
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      title="Follow us on Instagram"
                                    >
                                      <span className="icon">
                                        <i className="fab fa-instagram"></i>
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      title="Follow us on Twitter"
                                    >
                                      <span className="icon">
                                        <i className="fab fa-twitter"></i>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header