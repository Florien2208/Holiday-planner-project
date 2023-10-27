import React from "react";
import "./SuccessPopup.css"
function SuccessPopup({ message, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default SuccessPopup;
