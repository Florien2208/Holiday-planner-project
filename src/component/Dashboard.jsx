// Dashboard.js


import { Link } from "react-router-dom";
import "./Dashboard.css"; // Import your CSS file
import pro from "../images/djflo.jpg";
import {
  BsGrid,
//   BsChevronDown,
//   BsWechat,
//   BsArrowRightShort,
//   BsDash,
//   BsFillChatDotsFill,
} from "react-icons/bs";
import { TbBrandBooking } from "react-icons/Tb";
// import { FaUmbrellaBeach } from "react-icons/Fa";
import { HiOutlineLogout } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { GiCommercialAirplane } from "react-icons/gi";
import logoIconblack from "../images/logo.png";
// import { RiCalendarTodoFill } from "react-icons/ri";
// import { BiTimer, BiCreditCard } from "react-icons/bi";
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
              <Link to="#">
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
              <Link to="#">Tour</Link>
            </li>
            <br />

            <li>
              <TbBrandBooking />
              <Link to="#">Booking</Link>
            </li>
            <br />
            <br />
            <li>
              <TbBrandBooking />
              <Link to="#">Users</Link>
            </li>
          </ul>
          <br/><br/>
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
