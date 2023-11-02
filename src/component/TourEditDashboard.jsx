import React, { useState } from "react";

function EditTourForm({ tourData, onSave, onClose }) {
  const [editedData, setEditedData] = useState({ ...tourData });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? e.target.files[0] : value,
    }));
  };

  const handleSave = () => {
    onSave(editedData);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Edit Tour</h2>
        <div>
          <label htmlFor="Destination">Destination:</label>
          <input
            type="text"
            id="Destination"
            name="Destination"
            value={editedData.Destination}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="backdropImage">Backdrop Image:</label>
          <input
            type="file"
            id="backdropImage"
            name="backdropImage"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={editedData.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Gallery">Gallery:</label>
          <input
            type="file"
            id="Gallery"
            name="Gallery"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Duration">Duration:</label>
          <input
            type="text"
            id="Duration"
            name="Duration"
            value={editedData.Duration}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="GroupSize">Group Size:</label>
          <input
            type="text"
            id="GroupSize"
            name="GroupSize"
            value={editedData.GroupSize}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Price">Price:</label>
          <input
            type="text"
            id="Price"
            name="Price"
            value={editedData.Price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="discount">Discount:</label>
          <input
            type="text"
            id="discount"
            name="discount"
            value={editedData.discount}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default EditTourForm;
