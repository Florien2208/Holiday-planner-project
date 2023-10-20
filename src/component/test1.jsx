// ContactPage.js
// import "../pages/Contact.css";
function Tour() {
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   phone: "",
  //   services: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // You can implement the logic for handling the form submission here
  //   console.log("Form data submitted:", formData);
  // };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="services">Services:</label>
          <input type="text" id="services" name="services" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Tour;
