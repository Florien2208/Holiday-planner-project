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
// import { RiCalendarTodoFill } from "react-icons/ri";
// import { BiTimer, BiCreditCard } from "react-icons/bi";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="t2">
          <div className="t1">
            <img src={pro} alt="profile" />
          </div>
          <div>
            {" "}
            <h2>Florien</h2>
          </div>
        </div>
        <br/>
        <div>
          <ul>
            <li>
              <Link to="/dashboard/home">
                <BsGrid />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <CiLocationOn />
              <Link to="/dashboard/profile">Place</Link>
            </li>
            <li>
              <GiCommercialAirplane />
              <Link to="/dashboard/settings">Tour</Link>
            </li>
            <li>
              <TbBrandBooking />
              <Link to="/dashboard/profile">Booking</Link>
            </li>
            {/* <li>
              <FaUmbrellaBeach />
              <Link to="/dashboard/settings">camps </Link>
            </li> */}
          </ul>
          <div>
            <HiOutlineLogout />
            <Link to="/dashboard/settings">Logout </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
