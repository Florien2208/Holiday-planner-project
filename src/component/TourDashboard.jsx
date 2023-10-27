import React from "react";
import axios from "axios";
import Notiflix from "notiflix";
import "../component/TourDashboard.css";
import TourForm from "./AddNewTourForm";
import { mycontext } from "../component/usecontext";
import  { useState } from "react";
function TourDashboard() {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const { card_data, setCards } = mycontext();

 const handleConfirmDelete = async (_id) => {
   try {
     Notiflix.Confirm.show(
       "Confirm delete tour",
       "Do you agree with me?",
       "Yes",
       "No",
       async () => {
         const res = await axios.delete(
           `https://holiday-planner-4lnj.onrender.com/api/v1/tour/delete/${_id}`,
           {
             headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
             },
           }
         );
         window.location.reload();
       },
       () => {
         alert("If you say so...");
       },
       {}
     );
   } catch (error) {
     console.log(error);
   }
 };

 const openModal = () => {
   setIsModalOpen(true);
 };

 const closeModal = () => {
   setIsModalOpen(false);
 };
   const handleDelete = async (tourId) => {
    try {
     await axios.delete(
       `https://holiday-api-zj3a.onrender.com/api/v1/tour/delete${tourId}`
     );

      // If the delete request is successful, update the local state
      const updatedCardData = card_data.filter((tour) => tour.id !== tourId);
      setCards(updatedCardData);
    } catch (error) {
      console.error("Error deleting tour:", error);
      // Handle the error, e.g., show an error message to the user
    }
  };
  console.log(card_data);

  return (
    <div className="dash-card-container">
      <div className="tour-container">
        <button onClick={openModal}>Add New Tour</button>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <TourForm closeModal={closeModal} />
            </div>
          </div>
        )}
        <div className="dash-card-container">
          {card_data.map((card, index) => (
            <div className="cardtourdashboard" key={index}>
              <img src={card.backdropImage} alt={card.Title} />
              <div className="card-content">
                <h2>{card.Title}</h2>
                <p>{card.Description}</p>
                <div className="card-details">
                  <div className="card-duration">
                    <label htmlFor="">Duration</label>
                    <p>{card.Duration}</p>
                  </div>
                  <div className="card-group-size">
                    <label htmlFor="">Group Size</label>
                    <p>{card.GroupSize}</p>
                  </div>
                </div>
                <div className="card-booking">
                  <div className="card-amount">
                    <h3>${card.Price}</h3>
                  </div>
                  <div className="card-button">
                    <button>Edit</button>
                    <button
                      onClick={() => {
                       
                        handleConfirmDelete(card._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TourDashboard;
