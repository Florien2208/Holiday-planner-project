import React from "react";
import "../pages/Tour.css";
import {
  FaAngleRight,
  FaArrowDown,
  FaArrowRight,
  FaCalendar,
  FaCaretDown,
  FaEnvelope,
  FaMapMarker,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// import a1 from "../images/down.jpg";
// import a2 from "../images/down1.jpg";
// import a3 from "../images/down2.jpg";
import tourBanner from "../images/about1.jpg";
// import tourBoxImg1 from "../images/about2.jpg";
// import tourBoxImg2 from "../images/down1.jpg";
// import tourBoxImg3 from "../images/about1.jpg";
import gaqBg from "../images/about1.jpg";
export const tourlistMock = [
  {
    name: "Kenya",
    img: "https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image1.jpg",
    title: "Holiday Planners is a World Leading Online Tour Booking Platform",
    Description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    price: "$1200",
    discount: "15%",
    users: "15+ peoples",
    duration: "6Days 3Hours",
  },
  {
    name: "GREECE",
    img: "https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg",
    title: "Holiday Planners is a World Leading Online Tour Booking Platform",
    Description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    price: "$2500",
    discount: "45%",
    users: "65+ peoples",
    duration: "2Days 1Hour",
  },
  {
    name: "RWANDA",
    img: "https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image4.jpg",
    title: "Holiday Planners is a World Leading Online Tour Booking Platform",
    Description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    price: "$1200",
    discount: "5%",
    users: "34+ peoples",
    duration: "1Day 12Hours",
  },
  {
    name: "SWITZLAND",
    img: "https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image1.jpg",
    title: "Holiday Planners is a World Leading Online Tour Booking Platform",
    Description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    price: "$1200",
    discount: "8%",
    users: "23+ peoples",
    duration: " 7Hours",
  },
  {
    name: "USA",
    img: "https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image2.jpg",
    title: "Holiday Planners is a World Leading Online Tour Booking Platform",
    Description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    price: "$1200",
    discount: "3%",
    users: "15+ peoples",
    duration: "8Days 2Hours",
  },
  {
    name: "CANADA",
    img: "https://html.geekcodelab.com/holiday-planners/assets/images/tour-box-image4.jpg",
    title: "Holiday Planners is a World Leading Online Tour Booking Platform",
    Description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    price: "$1200",
    discount: "10%",
    users: "95+peoples",
    duration: "1Day 23Hours",
  },
];
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
  // const gaqBgStyle = {
  //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(14, 01, 29, 0.5)), url(${gaqBg})`, // Linear gradient overlay + image
  //   backgroundSize: "cover",
  //   backgroundPosition: "center center",
  //   backgroundColor: "#c29d59",
  // };
  // // const tourData = [
  //     {
  //       title: "Italy",
  //       imageSrc: a1,
  //       description:
  //         "Holiday Planners is a World Leading Online Tour Booking Platform",
  //       description1:
  //         "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
  //       duration: "2 days",
  //       groupSize: "6 People",
  //       price: "$1200",
  //       discount: "15% off",
  //     },
  //     {
  //       title: "Greece",
  //       imageSrc: a2,
  //       description:
  //         "Holiday Planners is a World Leading Online Tour Booking Platform",
  //       description1:
  //         "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
  //       duration: "6 days 3 hours",
  //       groupSize: "15+ People",
  //       price: "$2500",
  //       discount: "38% off",
  //     },
  //     {
  //       title: "Jaisalmer",
  //       imageSrc: a3,
  //       description:
  //         "Holiday Planners is a World Leading Online Tour Booking Platform",
  //       description1:
  //         "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
  //       duration: "1 days 8 hours",
  //       groupSize: "50+ People",
  //       price: "$750",
  //       discount: "38% off",
  //     },]

  return (
    <>
      <section className="background_imagetour">
        <div className="contenttour">
          <h1 className="contetour">Tours List</h1>
        </div>
      </section>
      <div className="">
        <div className="containertour">
          <div className="rowtour">
            <div className="rowlefttour">
              <div className="leftsidetour">
                <div className="" style={{ marginBottom: "30px" }}>
                  <div>
                    <div className="rowtour no-gutters">
                      <div className="rowrighttour">
                        <label className="forminputtour ">Sort By:</label>
                      </div>
                      <div className="rowrighttour">
                        <span className="formcontrolspantour release-wrap">
                          <select className="forminputtour">
                            <option value="">Release Date</option>
                            <option value="">Tour Date</option>
                            <option value="">title</option>
                            <option value="">Price</option>
                            <option value="">Popularity</option>
                            <option value="">Rating</option>
                            <option value="">Duration</option>
                          </select>
                          <span className="arrowtour">
                            <div className="">
                              <FaArrowDown />
                            </div>
                          </span>
                        </span>
                      </div>
                      <div className="rowrighttour">
                        <span className="formcontrolspantour order-wrap">
                          <select className="forminputtour">
                            <option value="">Ascending</option>
                            <option value="">Descending</option>
                          </select>
                          <span className="arrowtour">
                            <div className="i">
                              <FaArrowDown />
                            </div>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="rowtour">
                    {tourlistMock.map((item, index) => (
                      <div className="colrow6tour" key={index}>
                        <div className="tourboxtour">
                          <div
                            className="tourboximagetour back-image"
                            style={{
                              backgroundImage: `url("${item.img}")`,
                            }}
                          >
                            <span className="discountlabeltour">15%</span>
                          </div>
                          <div className="tourboxcontenttour">
                            <div className="tourboxlabeltour">
                              <div className="tourboxinnerlabeltour">
                                <h4 className="h4titletour">
                                  {item.destination}
                                </h4>
                              </div>
                            </div>
                            <div className="tourboxtitletour">
                              <h4 className="h4titletour">{item.title}</h4>
                            </div>
                            <div className="tourboxdescriptiontour">
                              <p style={{ color: "black", fontSize: "small" }}>
                                {item.Description ?? "no description"}
                              </p>
                            </div>
                            <div className="tourinfoboxtour">
                              <div className="rowtour">
                                <div className="col6tour">
                                  <div className="tourinfotour">
                                    {/* <div className="tour-info-icon">
                                    <div className="i">
                                      <FaClock />
                                    </div>
                                  </div> */}
                                    <div className="tourinfocontenttour">
                                      <h5 className="h6titletour">Duration</h5>
                                      <p
                                        style={{
                                          color: "black",
                                          fontSize: "small",
                                        }}
                                      >
                                        {item.fromMonth}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col6tour">
                                  <div className="tourinfotour">
                                    {/* <div className="tour-info-icon">
                                    <div className="i">
                                      <FaUserFriends />
                                    </div>
                                  </div> */}
                                    <div className="tourinfocontenttour">
                                      <h5 className="h6titletour">
                                        Group Size
                                      </h5>
                                      <p
                                        style={{
                                          color: "black",
                                          fontSize: "small",
                                        }}
                                      >
                                        {item.GroupSize}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tourboxbottomtour">
                              <div className="tourpricetour">
                                <h3 className="h3titletour">$1200</h3>
                              </div>
                              <div className="booknowbuttontour">
                                <div className="a">
                                  <Link to="/SingleTour">
                                    <span className="secbtntour">Book Now</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rowtour">
                    <div className="colrow12tour">
                      <ul className="pagination" style={{ display: "flex" }}>
                        <li className="page-item active">
                          <div className="page-link">1</div>
                        </li>
                        <li className="page-item">
                          <div className="page-link">2</div>
                        </li>
                        <li className="page-item">
                          <div className="a">
                            <div className="i">
                              <FaArrowRight style={{ fontSize: "2rem" }} />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rowrighttour">
              <div className="rightsidetour">
                <div className="widgettour ">
                  <div className="linetitletour">
                    <h4 className="h4titletour">Find Your Tour</h4>
                  </div>
                  <div className="findtourformtour">
                    <form>
                      <div className="rowtour">
                        <div className="colrow12tour">
                          <span className="formcontrolspantour">
                            {/* <span className="icon">
                            <div className="i">
                              <FaSearch />
                            </div>
                          </span> */}
                            <input
                              type="text"
                              placeholder="Search Tour"
                              className="forminputtour"
                            />
                          </span>
                        </div>
                        <div className="colrow12tour">
                          <span className="formcontrolspantour">
                            <span className="icon">
                              <div className="i">
                                <FaMapMarker />
                              </div>
                            </span>
                            <input
                              type="text"
                              placeholder="Where To?"
                              className="forminputtour"
                            />
                          </span>
                        </div>
                        <div className="colrow12tour">
                          <span className="formcontrolspantour">
                            <span className="icon">
                              <div className="i">
                                <FaCalendar />
                              </div>
                            </span>
                            <select className="forminputtour">
                              <option>Month</option>
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
                            <span className="arrowtour">
                              <div className="i">
                                <FaCaretDown />
                              </div>
                            </span>
                          </span>
                        </div>
                        <div className="colrow12tour">
                          <label className="labelinputtour">Duration</label>
                          <span className="formcontrolspantour no-icon">
                            <select className="forminputtour">
                              <option>Any</option>
                              <option>1 Day Tour</option>
                              <option>2-4 Days Tour</option>
                              <option>5-7 Days Tour</option>
                              <option>7+ Days Tour</option>
                            </select>
                            <span className="arrowtour">
                              <div className="i">
                                <FaCaretDown />
                              </div>
                            </span>
                          </span>
                        </div>
                        <div className="colrow6tour ">
                          <label className="labelinputtour">Min Price</label>
                          <span className="formcontrolspantour no-icon no-arrow">
                            <input
                              type="number"
                              className="forminputtour"
                              placeholder="1"
                            />
                          </span>
                        </div>
                        <div className="colrow6tour ">
                          <label className="labelinputtour">Max Price</label>
                          <span className="formcontrolspantour no-icon no-arrow">
                            <input
                              type="number"
                              className="forminputtour"
                              placeholder="100"
                            />
                          </span>
                        </div>
                        <div className="colrow12tour">
                          <div className="checkboxlisttour">
                            <div className="checkboxitemtour">
                              <input
                                type="checkbox"
                                id="cultural"
                                name="cultural"
                                value="cultural"
                              />
                              <label
                                htmlFor="cultural"
                                className="checkboxlabeltour"
                              >
                                Cultural
                              </label>
                            </div>
                            <div className="checkboxitemtour">
                              <input
                                type="checkbox"
                                id="adventure"
                                name="adventure"
                                value="adventure"
                              />
                              <label
                                htmlFor="adventure"
                                className="checkboxlabeltour"
                              >
                                Adventure
                              </label>
                            </div>
                            <div className="checkboxitemtour">
                              <input
                                type="checkbox"
                                id="historical"
                                name="historical"
                                value="historical"
                              />
                              <label
                                htmlFor="historical"
                                className="checkboxlabeltour"
                              >
                                Historical
                              </label>
                            </div>
                            <div className="checkboxitemtour">
                              <input
                                type="checkbox"
                                id="seaside"
                                name="seaside"
                                value="seaside"
                              />
                              <label
                                htmlFor="seaside"
                                className="checkboxlabeltour"
                              >
                                Seaside
                              </label>
                            </div>
                            <div className="checkboxitemtour">
                              <input
                                type="checkbox"
                                id="discovery"
                                name="discovery"
                                value="discovery"
                              />
                              <label
                                htmlFor="discovery"
                                className="checkboxlabeltour"
                              >
                                Discovery
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="colrow12tour">
                          <button className="secbtntour find-now-btn">
                            <span>Find Now</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="widgettour why-book-with-us">
                  <div className="linetitletour">
                    <h4 className="h4titletour">Why Book With Us?</h4>
                  </div>
                  <ul className="bookwithlisttour">
                    <li>
                      <div className="i">
                        <FaAngleRight />
                      </div>{" "}
                      Best care Guarantee
                    </li>
                    <li>
                      <div className="i">
                        <FaAngleRight />
                      </div>{" "}
                      Customer care available 24/7
                    </li>
                    <li>
                      <div className="i">
                        <FaAngleRight />
                      </div>{" "}
                      Free Travel Insureance
                    </li>
                    <li>
                      <div className="i">
                        <FaAngleRight />
                      </div>{" "}
                      Hand-picked Tours &amp; Activities
                    </li>
                  </ul>
                </div>
                <div
                  className="widgettour get-a-questions back-image "
                  style={{
                    backgroundImage:
                      'url("https://html.geekcodelab.com/holiday-planners/assets/images/get-a-questions-back.jpg")',
                  }}
                >
                  <div className="linetitletour">
                    <h4 className="h4titletour">Get a Question?</h4>
                  </div>
                  <p>
                    Do not hesitage to give us a call. We are an expert team and
                    we are happy to talk to you.
                  </p>
                  <ul className="gaqlistitemtour">
                    <li>
                      <div className="a">
                        <div className="i">
                          <FaEnvelope />
                        </div>
                        florien@gmail.com
                      </div>
                    </li>
                    <li>
                      <div className="a">
                        <div className="i">
                          <FaPhone />
                        </div>
                        (+250) 786789098
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tour;
