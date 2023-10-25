import React from "react";
import "../component/TourDashboard.css";
import TourForm from "./AddNewTourForm";
import { mycontext } from "../component/usecontext";
import  { useState } from "react";
function TourDashboard() {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const { card_data } = mycontext();

 const openModal = () => {
   setIsModalOpen(true);
 };

 const closeModal = () => {
   setIsModalOpen(false);
 };
  console.log(card_data);

  return (
    <div className="dash-card-container">
      <div className="tour-container">
        <button onClick={openModal}>Add New Tour</button>
        {isModalOpen && (
          <div className="modaladdnewtour">
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
            <div className="card" key={index}>
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
                    <button>Delete</button>
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
