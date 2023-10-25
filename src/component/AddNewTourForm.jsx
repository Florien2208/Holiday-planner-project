import React, { useState } from "react";
import { mycontext } from "./usecontext";
import {useForm} from "react-hook-form"
import axios from "axios";
import SuccessPopup from "./SuccessPopup";
function TourForm( ) {
  
  const [formData, setFormData] = useState({
    name: "",
    backdropImage: null,
    title: "",
    Gallery: "",
    Duration: "",
    GroupSize: "",
    Price: "",
    discount: "",
    tourType: "",
    departure: "",
    departureTime: "",
  });
  const {register, handleSubmit, formState,} = useForm();
  const { addTour } = mycontext();
  const{errors} = formState;
  const [successMessage, setSuccessMessage] = useState("");
  const [isPopupVisible, setPopupVisible] = useState(false);

  const showPopup = (message) => {
    setSuccessMessage(message);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSuccessMessage("");
    resetForm();
  };
    const resetForm = () => {
      setFormData({
        name: "",
        backdropImage: null,
        title: "",
        Gallery: "",
        Duration: "",
        GroupSize: "",
        Price: "",
        discount: "",
        tourType: "",
        departure: "",
        departureTime: "",
      });
    };
  const onsubmit = async(data) =>
  {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("Title", data.title);
    formData.append("backdropImage", data.image[0]);
    formData.append("Gallery", data.Gallery[0]);
     formData.append("Duration", data.Duration);
     formData.append("GroupSize", data.GroupSize);
      formData.append("Price", data.Price);
    
    try {
      const res = await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/tour/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if(res.data)
      {
        console.log('tour create ', res.data)
         showPopup("Tour created successfully.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleImageChange = (e) => {
  //   const imageFile = e.target.files[0];
  //   setFormData({
  //     ...formData,
  //     backdropImage: imageFile,
  //   });
  // };

  // const handleSubmits = (e) => {
  //   e.preventDefault();
  //   // Call a function to add the new tour using context or another method
  //   addTour(formData);
  //   // Reset the form
  //   setFormData({
  //     destination: "",
  //     backdropImage: null,
  //     Title: "",
  //     Description: "",
  //     Duration: "",
  //     GroupSize: "",
  //     Price: "",
  //     discount: "",
  //     tourType: "",
  //     departure: "",
      
  //     departureTime: "",
  //   });
  //   closeModal(); // Close the modal
  // };

  return (
    <div className="tour-form-container">
      <h2>Add New Tour</h2>
      {/* {successMessage && <p>{successMessage}</p>} */}
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            {...register("name", { required: true })}
            // value={formData.destination}
            // onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="backdropImage">title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="title"
            {...register("title", { required: true })}
            // onChange={handleImageChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="backdropImage">Image</label>
          <input
            type="file"
            name="image"
            id="image"
            placeholder="image"
            {...register("image", { required: true })}
            // onChange={handleImageChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="backdropImage">Gallery</label>
          <input
            type="file"
            name="Gallery"
            id="Gallery"
            placeholder="Gallery"
            {...register("Gallery", { required: true })}
            // onChange={handleImageChange}
          />
        </div>

        {/* Add similar input fields for other form fields (Title, Description, etc.) */}
        {/* <input
           type="text"
          name="Title"
          placeholder="Title"
          value={formData.Title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="Description"
          placeholder="Description"
          value={formData.Description}
          onChange={handleInputChange}
        /> */}
        <div>
          <label htmlFor="backdropImage">Duration</label>
          <input
            type="text"
            id="duration"
            name="Duration"
            placeholder="Duration"
            {...register("Duration", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="backdropImage">Group Size</label>
          <input
            type="text"
            name="GroupSize"
            id="GroupSize"
            placeholder="Group Size"
            {...register("GroupSize", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="backdropImage">Price</label>
          <input
            type="text"
            name="Price"
            id="Price"
            placeholder="Price"
            {...register("Price", { required: true })}
          />
        </div>

        {/* <div className="form-group">
          <label htmlFor="departureTime">Departure Time</label>
          <input
            type="time"
            name="departureTime"
            id="departureTime"
            value={formData.departureTime}
            onChange={handleInputChange}
          />
        </div> */}
        <br />
        <button type="submit">Add Tour</button>
      </form>
      {isPopupVisible && (
        <SuccessPopup message={successMessage} onClose={closePopup} />
      )}
    </div>
  );
}

export default TourForm;
