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
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${user.fullNames}?`
    );
    if (confirmDelete) {
      axios
        .delete(apiUrl + `/${user.id}`)
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
        <table className="custom-table">
          <thead>
            <tr>
              <th>Names</th>
              <th>Email</th>
              {/* <th>Passwords</th> */}
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <td>{user.fullNames}</td>
                <td>{user.email}</td>
                {/* <td>{user.password}</td> */}
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
