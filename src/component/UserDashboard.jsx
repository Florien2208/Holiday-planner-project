import React, { useState, useEffect } from "react";
import axios from "axios";
import "../component/UserDashboard.css";
import UserEditModal from "../component/UserEditModal"; // Import the modal component

const UserDashboard = () => {
  const [userData, setUserData] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const apiUrl = "https://holiday-api-zj3a.onrender.com/api/v1/auth/users";

  useEffect(() => {
    // Fetch user data from the API
    axios
      .get(apiUrl)
      .then((response) => {
        setUserData(response.data);
        console.log("Fetched user data:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleEdit = (user) => {
    console.log("Editing user:", user);
    setEditingUser(user);
    setIsModalOpen(true); // Open the modal
  };

  const handleSave = (user) => {
    axios
      .put(apiUrl + `/${user.id}`, user)
      .then((response) => {
        const updatedUserData = userData.map((u) =>
          u.id === user.id ? user : u
        );
        setUserData(updatedUserData);
        setEditingUser(null);
        setIsModalOpen(false); // Close the modal after saving
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };


  
  
  const handleDelete = (user) => {
    console.log("Attempting to delete user:", user);
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${user.fullNames}?`
    );
    if (confirmDelete) {
      axios
        .delete(
          `https://holiday-api-zj3a.onrender.com/api/v1/auth/users/delete/${user.email}`
          
        )
        .then(() => {
          const updatedUserData = userData.filter((u) => u.id !== user.id);
          setUserData(updatedUserData);
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    }
  };

  return (
    <div className="user31">
      <div>
        <h2>User Dashboard</h2>
        <br />
        <div className="user-dashboard-container">
          <div className="userbutton">
            <button className="add-new-user-button">Add New User</button>
          </div>
          <br/>
          <table className="custom-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Names</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{user.fullNames}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => handleEdit(user)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(user)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && (
        <UserEditModal
          user={editingUser}
          onSave={handleSave}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default UserDashboard;
