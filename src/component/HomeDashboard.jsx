import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import'./HomeDashboard.css'
import { mycontext } from "./usecontext";

import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
  
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function HomeDashboard() {
   const getAccessToken = () => {
     return localStorage.getItem("access_token");
   };
  const { card_data } = mycontext();
    const [numUsers, setNumUsers] = useState(0);

    // Fetch the number of users from the API
    // useEffect(() => {
    //   axios
    //     .get("https://holiday-planner-4lnj.onrender.com/api/v1/auth/users")
    //     .then((response) => {
    //       // Update the state with the number of users from the API response
    //       setNumUsers(response.data.length);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching number of users: ", error);
    //     });
    // }, []);
    const apiUrl =
      "https://holiday-planer-project.onrender.com/holidays/users/getusers";
    useEffect(() => {
      const token = getAccessToken();
      // Fetch user data from the API
      axios
        .get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
         setNumUsers(response.data.length);
         
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);

    const [userData, setMessages] = useState([0]);
    useEffect(() => {
      // Fetch messages from the API
      axios
        .get("https://holiday-api-zj3a.onrender.com/api/v1/cont/contact/all")
        .then((response) => {
          setMessages(response.data.length); // Assuming the response is an array of messages
          // setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching messages: ", error);
          // setLoading(false);
        });
    }, []);

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="cardashboard">
          <div className="card-inner">
            <h3>BOOKINGS</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>0</h1>
        </div>
        <div className="cardashboard">
          <div className="card-inner">
            <h3>TOURS</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>{card_data.length}</h1>
        </div>
        <div className="cardashboard">
          <div className="card-inner">
            <h3>USERS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{numUsers}</h1>
        </div>
        <div className="cardashboard">
          <div className="card-inner">
            <h3>contact</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>{userData}</h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default HomeDashboard;
