import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css"; 

import {
  BsGrid

} from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import {BiMessageRoundedDetail} from "react-icons/bi";
import { TbBrandBooking } from "react-icons/tb";
import { HiOutlineLogout } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { GiCommercialAirplane } from "react-icons/gi";
import logoIconblack from "../images/logo.png";
import djflo from "../images/djflo.jpg";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Perform logout actions here, e.g., clearing user data, tokens, or local storage.
    localStorage.removeItem("access_token");
    // For this example, we'll simply reload the page to simulate logging out.
    navigate("/");
  };
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div>
          <Link to="/">
            <img src={logoIconblack} alt="logo-icon-white" />
          </Link>
        </div>
        <br />
        <div className="djflo">
          <div className="djflo1">
            <img src={djflo} />
          </div>
          <div className="djflo2">Admin</div>
        </div>
        <br />
        <div className="sidebardashboard">
          <ul>
            <li>
              <Link to="/HomeDashboard">
                <BsGrid />
                <span>Dashboard</span>
              </Link>
            </li>
            <br />

            <li>
              <Link to="#">
                <CiLocationOn />
                Place
              </Link>
            </li>
            <br />

            <li>
              <Link to="/TourDashboard/">
                <GiCommercialAirplane />
                Tour
              </Link>
            </li>
            <br />

            <li>
              <Link to="#">
                <TbBrandBooking />
                Booking
              </Link>
            </li>
            <br />
            <li>
              <Link to="/ContactDashboard">
                <BiMessageRoundedDetail />
                Contact Details
              </Link>
            </li>
            <br />
            <br />
            <li>
              <Link to="/UserDashboard">
                <FaUsers />
                Users
              </Link>
            </li>
          </ul>
          <br />
          <br />
          <div className="logoutdashboard">
            <button onClick={handleLogout}>
              <HiOutlineLogout />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
