import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const DashboardContact = () => {
   const [userData, setUserData] = useState([]);
   const [loading, setLoading]= useState(true);
    useEffect(() => {
      // Fetch messages from the API
      axios
        .get("https://holiday-api-zj3a.onrender.com/api/v1/cont/contact/all")
        .then((response) => {
           
            
          setUserData(response.data); // Assuming the response is an array of messages
          setLoading(false);// setLoading(false);
           console.log("API Response:", response.data);
            console.log("userData length:", userData.length);
         
        })
        .catch((error) => {
          console.error("Error fetching messages: ", error);
          setLoading(false);// setLoading(false);
        });
    }, [userData]);
 
    // const handleNewMessage = (newMessage) => {
    //   //when new msg added
    //   setMessageNumber(messageNumber + 1);

    //   //add new msg to msg array
    //   setMessages([...messages, newMessage]);
    // };
  return (
    <div className="user31">
      <div>
        <h2>Contact Detail</h2>
        <br />
        <div className="user-dashboard-container">
          {loading ? ( // Check loading state
            <p>Loading...</p>
          ) : (
          <table className="custom-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>full Names</th>
                <th>Email</th>
                <th>phone number</th>
                <th>Service</th>
                <th>message</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
             {userData.length > 0 ? ( // Check if userData is not empty
                  userData.map((message, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{message.fullName}</td>
                      <td>{message.email}</td>
                      <td>{message.phoneNumber}</td>
                      <td>{message.service}</td>
                      <td>{message.message}</td>
                      <td>
                        <button
                          className="userda"
                          // onClick={() => handleDelete(user)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  
                  <tr>
                    <td colSpan="7">No data available</td>
                  </tr>
                )}
            </tbody>
          </table>
          )}
        </div>
      </div>
      {/* {isModalOpen && (
        <UserEditModal
          user={editingUser}
          onSave={handleSave}
          onClose={() => setIsModalOpen(false)}
        />
      )} */}
    </div>
  );
};
export default DashboardContact;
