import React from "react";
import "../pages/Tour.css";
import {
  FaAngleRight,
  FaCalendarAlt,
  FaCaretDown,
  FaClock,
  FaMapMarkerAlt,
  FaSearch,
  FaUserFriends,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import a1 from "../images/down.jpg";
import a2 from "../images/down1.jpg";
import a3 from "../images/down2.jpg";
import tourBanner from "../images/about1.jpg";
import tourBoxImg1 from "../images/about2.jpg";
import tourBoxImg2 from "../images/down1.jpg";
import tourBoxImg3 from "../images/about1.jpg";
import gaqBg from "../images/about1.jpg";

function Tour() {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(14,1,29,.5)), url(${tourBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  // const tboxImgStyle1 = {
  //   backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(14,1,29,.5)), url(${tourBoxImg1})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center center",
  // };
  // const tboxImgStyle2 = {
  //   backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(14,1,29,.5)), url(${tourBoxImg2})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center center",
  // };
  // const tboxImgStyle3 = {
  //   backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(14,1,29,.5)), url(${tourBoxImg3})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center center",
  // };
  const gaqBgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(14, 01, 29, 0.5)), url(${gaqBg})`, // Linear gradient overlay + image
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundColor: "#c29d59",
  };
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
      },]

  return (
    <main className="tour">
      <div className="tour-hero" style={backgroundStyle}>
        <div className="col-12">
          <div className="banner-content">
            <h1 className="h1-title">Tour List</h1>
          </div>
        </div>
      </div>
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
                Trending, <span>Best Selling Tours</span> And Fun Destinations
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
                      <span className="discount-label">{tour.discount}</span>
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
      
    </main>
  );
}

export default Tour;
