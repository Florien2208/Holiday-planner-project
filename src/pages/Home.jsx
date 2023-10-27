// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../Css/Home.css";
// import { useState } from "react";

import "../pages/Contact"
import testmony from "../images/testmo.svg";
// import "../pages/Test.css";
import { FaFacebookF } from "react-icons/fa";
// import { BsSearch } from "react-icons/bs";

import a1 from "../images/down.jpg";
import a2 from "../images/down1.jpg";
import a3 from "../images/down2.jpg";
import mountain from "../images/mountain.jpg";
import woo from "../images/image.jpg";
import small from "../images/about-home.jpg";
import { Link } from "react-router-dom";
// import Com1 from "../assets/comp1";
function Home() {
    // const [isOpen, setIsOpen] = useState(false);
const containerStyle = {
  backgroundImage: `url(${mountain})`, 
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat", 
  height: "100vh", 
};
const small1 = {
  backgroundImage: `url(${small})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "10rem",
  width: "15rem",
  marginLeft: "18rem",
  marginTop: "13rem",
};
const containerStyle1 = {
  backgroundImage: `url(${woo})`, 
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat", 
  height: "20rem",
  width:"30rem",
  marginTop:"1rem",
  marginLeft:"3rem",
};
    // const toggleSearch = () => {
    //   setIsOpen(!isOpen);
    // };
    // const [trending, settrending] =userState{
      
    // }
    const tourData = [
      {
        title: "Italy",
        imageSrc: a1,
        description:
          "Holiday Planners is a World Leading Online Tour Booking Platform",
        description1:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
        duration: "2 days",
        groupSize: "6 People",
        price: "$1200",
        discount: "15% off",
      },
      {
        title: "Greece",
        imageSrc: a2,
        description:
          "Holiday Planners is a World Leading Online Tour Booking Platform",
        description1:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
        duration: "6 days 3 hours",
        groupSize: "15+ People",
        price: "$2500",
        discount: "38% off",
      },
      {
        title: "Jaisalmer",
        imageSrc: a3,
        description:
          "Holiday Planners is a World Leading Online Tour Booking Platform",
        description1:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
        duration: "1 days 8 hours",
        groupSize: "50+ People",
        price: "$750",
        discount: "38% off",
      },
      
    ];
  return (
    <>
      <div>
        <section className="main-banner">
          <div className="banner-slider">
            <div
              className="banner-slide-box overlay back-image"
              style={containerStyle}
            >
              <div className="sec-wp">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 m-auto">
                      <div
                        className="banner-content wow fadeup-animation"
                        data-wow-duration="1s"
                        data-wow-delay="0.1s"
                      >
                        <h1 className="h1-title">
                          Enjoy The Travel With <span>Holiday Planners</span>
                        </h1>
                        <p>
                          A journey of a 1000 miles starts with a single step.
                          Import the full demo content with 1 click and create a
                          head-turning website for your travel agency.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <br />
        <br />
        <div
          className="mainmodular"
          style={{ zIndex: 999, backgroundColor: "white" }}
        >
          <div className="">
            <div className="">
              <div className="rowbox">
                <div className="">
                  <div className="bannerformbox">
                    <div className="formmodular">
                      <div
                        className="inputcol wow fadeup-animation"
                        data-wow-duration="1s"
                        data-wow-delay="0.2s"
                      >
                        <span className="formcontrolspan where-wrap">
                          <span className="iconmodular">
                            <i className=""></i>
                          </span>
                          <input
                            type="text"
                            className="forminputmodular"
                            placeholder="Where To?"
                          />
                        </span>
                      </div>
                      <div
                        className="inputcol wow fadeup-animation"
                        data-wow-duration="1s"
                        data-wow-delay="0.3s"
                      >
                        <span className="formcontrolspan when-wrap">
                          <span className="iconmodular">
                            <i className="fas fa-calendar-alt"></i>
                          </span>
                          <select className="forminputmodular">
                            <option>When?</option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                          </select>
                          <span className="arrow">
                            <i className=""></i>
                          </span>
                        </span>
                      </div>
                      <div
                        className="inputcol wow fadeup-animation"
                        data-wow-duration="1s"
                        data-wow-delay="0.4s"
                      >
                        <span className="formcontrolspan travel-wrap">
                          <span className="iconmodularmodular">
                            <i className=""></i>
                          </span>
                          <select className="forminputmodular">
                            <option>Travel Type</option>
                            <option>Cultural</option>
                            <option>Adventure</option>
                            <option>Historical</option>
                            <option>Seaside</option>
                            <option>Discovery</option>
                          </select>
                          <span className="arrow">
                            <i className="fas fa-caret-down"></i>
                          </span>
                        </span>
                      </div>
                      <div
                        className="inputcol button-col wow fadeup-animation"
                        data-wow-duration="1s"
                        data-wow-delay="0.5s"
                      >
                        <span className="formcontrolspan button-wrap">
                          <button className="sec-btn">
                            <span>Find Now</span>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          className="main-about common-sec"
          style={{ background: "white" }}
        >
          <div className="logo-icon">
            <img src="assets/images/logo-icon.svg" alt="logo-icon" />
          </div>
          <div className="sec-wp">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="about-image-wp">
                    <div
                      style={containerStyle1}
                      className="about-image-box small wow fadeup-animation"
                      data-wow-duration="1s"
                      data-wow-delay="0.2s"
                    >
                      <div
                        style={small1}
                        className="about-image back-image"
                        // style="background-image: url(assets/images/about-small-image.jpg);"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="about-content wow left-animation"
                    data-wow-duration="1s"
                    data-wow-delay="0.1s"
                  >
                    <div className="line-title">
                      <h4 className="h4-title">About us</h4>
                    </div>
                    <h2 className="h2-title">
                      Plan Your <span>Trip</span> with <span>Us</span>
                    </h2>
                    <div className="about-content-text">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean. A
                        small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth. Even the all-powerful
                        Pointing has no control about the blind texts it is an
                        almost unorthographic. Italic Mountains, she had a last
                        view back on the skyline
                      </p>
                    </div>
                    <a href="about.html" title="Read More" className="sec-btn">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="main-tour bg-f6 back-image"
          //   style="background-image: url(assets/images/white-map.png);"
        >
          <div className="tour-services">
            <div className="container">
              <div
                className="tour-services-row wow fadeup-animation"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              ></div>
            </div>
          </div>
          <div className="tour-sec pt-70">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="sec-title wow fadeup-animation"
                    data-wow-duration="1s"
                    data-wow-delay="0.1s"
                  >
                    <div className="line-title">
                      <h4 className="h4-title">Amazing Tours</h4>
                    </div>
                    <h2 className="h2-title">
                      Trending, <span>Best Selling Tours</span> And Fun
                      Destinations
                    </h2>
                  </div>
                </div>
              </div>
              <div className="tour-slider-container">
                <div className="tour-slider">
                  {tourData.map((tour, index) => (
                    <div className="col-lg-4 card" key={index}>
                      <div className="tour-box">
                        <div
                          className="tour-box-image back-image"
                          style={{ backgroundImage: `url(${tour.imageSrc})` }}
                        >
                          <img src={tour.imageSrc} alt={tour.title} />
                          {tour.discount && (
                            <span className="discount-label">
                              {tour.discount}
                            </span>
                          )}
                        </div>
                        <div className="tour-box-content">
                          <div className="tour-box-label">
                            <div className="tour-box-inner-label">
                              <h4 className="h4-title">{tour.title}</h4>
                            </div>
                          </div>
                          <div className="tour-box-title">
                            <h4 className="h4-title">{tour.description}</h4>
                          </div>
                          <div className="tour-box-description">
                            <p>{tour.description1}</p>
                          </div>
                          <div className="tour-info-box">
                            <div className="row">
                              <div className="col-6">
                                <div className="tour-info">
                                  <div className="tour-info-icon">
                                    <i className="fas fa-clock"></i>
                                  </div>
                                  <div className="tour-info-content">
                                    <h5 className="h6-title">Duration</h5>
                                    <p>{tour.duration}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="tour-info">
                                  <div className="tour-info-icon">
                                    <i className="fas fa-user-friends"></i>
                                  </div>
                                  <div className="tour-info-content">
                                    <h5 className="h6-title">Group Size</h5>
                                    <p>{tour.groupSize}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tour-box-bottom">
                            <div className="tour-price">
                              <h3 className="h3-title">{tour.price}</h3>
                            </div>
                            <div className="book-now-button">
                              <a
                                href="tour-detail.html"
                                title="Book Now"
                                className="sec-btn"
                              >
                                
                                  <span>Book Now</span>
                                
                                
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <div className="hello">
          {/* <section className="main-testimonial">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-5">
                  <div
                    className="testimonial-left-side pt-70 wow right-animation"
                    data-wow-duration="1s"
                    data-wow-delay="0.1s"
                  >
                    <div className="sec-title">
                      <div className="line-title">
                        <h4 className="h4-title">Testimonials</h4>
                      </div>
                      <h2 className="h2-title">
                        Customer <span>Reviews</span>
                      </h2>
                    </div>
                    <div
                      // style={{ backgroundImage: `url(${testmony})` }}
                      className="testimonial-quote"
                    >
                      <img
                        src="https://html.geekcodelab.com/holiday-planners/assets/images/testimonial-quote.svg"
                        alt="testimonial-quote"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1">
                  <div
                    className="testimonial-right-side wow left-animation"
                    data-wow-duration="1s"
                    data-wow-delay="0.1s"
                  >
                    <div className="testimonial-slider">
                      <div className="testimonial-slide">
                        <div className="testimonial-stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <div className="overflow-text">
                          <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics,
                            a large language ocean.
                          </p>
                        </div>
                        <div className="testimonial-name">
                          <h3 className="h3-title">John Doe</h3>
                          <p className="rated">
                            Rated by travelers on facebook
                          </p>
                        </div>
                      </div>

                      <div className="testimonial-slide">
                        <div className="testimonial-stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <div className="overflow-text">
                          <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics,
                            a large language ocean.
                          </p>
                        </div>
                        <div className="testimonial-name">
                          <h3 className="h3-title">Minh Chau</h3>
                          <p className="rated">
                            Rated by travelers on instagram
                          </p>
                        </div>
                      </div>

                      <div className="testimonial-slide">
                        <div className="testimonial-stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <div className="overflow-text">
                          <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics,
                            a large language ocean.
                          </p>
                        </div>
                        <div className="testimonial-name">
                          <h3 className="h3-title">Mathew A. Stephenson</h3>
                          <p className="rated">Rated by travelers on twitter</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </>
  );
}
export default Home;
