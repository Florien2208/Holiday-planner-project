import { Link } from "react-router-dom";
import "./Dashboard.css"; 

import {
  BsGrid,

} from "react-icons/bs";
import { FaUsers } from "react-icons/Fa";
import { TbBrandBooking } from "react-icons/Tb";
import { HiOutlineLogout } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { GiCommercialAirplane } from "react-icons/gi";
import logoIconblack from "../images/logo.png";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div>
          <Link to="/">
            <img src={logoIconblack} alt="logo-icon-white" />
          </Link>
        </div>
        <br />
        <br />
        <br />
        <div>
          <ul>
            <li>
              <Link to="/HomeDashboard">
                <BsGrid />
                <span>Dashboard</span>
              </Link>
            </li>
            <br />

            <li>
              <CiLocationOn />
              <Link to="#">Place</Link>
            </li>
            <br />

            <li>
              <GiCommercialAirplane />
              <Link to="/TourDashboard/">Tour</Link>
            </li>
            <br />

            <li>
              <TbBrandBooking />
              <Link to="#">Booking</Link>
            </li>
            <br />
            <br />
            <li>
              <FaUsers />
              <Link to="/UserDashboard">Users</Link>
            </li>
          </ul>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="logoutdashboard">
            <HiOutlineLogout />
            <Link to="/dashboard/settings">Logout </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
