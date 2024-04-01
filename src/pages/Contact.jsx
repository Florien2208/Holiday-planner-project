import  { useState } from "react";
import "../pages/contact.css";
import axios from "axios";
import Notiflix from "notiflix";
import {

  FaEnvelope,
  
  FaAngleRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaAt,
} from "react-icons/fa";

import contactBanner from "../images/contact-banner.jpg";
import gaqBg from "../images/get-a-questions-back.jpg";

function contact() {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(14, 01, 29, 0.5)), url(${contactBanner})`, // Linear gradient overlay + image
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const gaqBgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(14, 01, 29, 0.5)), url(${gaqBg})`, // Linear gradient overlay + image
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundColor: "#c29d59",
  };
const [formData, setFormData] = useState({
  email: "",
  message: "",
  fullName: "",
  service: "",
  phoneNumber: "",
});

 const[fullName,setFullname]=useState("");
 const [email, setEmail] = useState("");
 const [phoneNumber, setPhoneNumber] = useState("");
 const [service, setServices] = useState("");
  const [message, setMessage] = useState("");
//   const payload={
//     fullName,
//     email,
//     phoneNumber,
//     services,
//     message

const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a POST request to the API to submit the form data
    axios
      .post(
        "https://holiday-api-zj3a.onrender.com/api/v1/cont/contact",
        {
           fullName: fullName,
    email: email,
    phoneNumber: phoneNumber,
    service: service,
    message: message,
        }
      )
      .then((response) => {
        setIsFormSubmitted(true);
        // You can handle success here
        setFormData({
          message: "",
          fullName: "",
          email: "",
          phoneNumber: "",
          service: "",
        });
        Notiflix.Notify.info("Your Message Submitted Successfully!");
      })
      .catch((error) => {
        console.error("Error submitting the form: ", error);
        // You can handle errors here
      });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <main className="">
      <div className="contactherocontact" style={backgroundStyle}>
        <div className="col12contact">
          <div className="bannercontentcontact">
            <h1 className="h1titlecontact">Contact us</h1>
          </div>
        </div>
      </div>
      <div className="">
        <div className="containercontact">
          <div className="rowcontact">
            <div className="col8contact">
              <div className="leftsidecontact">
                <div className="contactformcontact">
                  <form onSubmit={handleSubmit}>
                    <div className="rowcontact ">
                      <div className="contactforminputcontact col-6">
                        <span className="inputboxcontact">
                          {/* <span className="icon">
                            <FaUser />
                          </span> */}
                          <input
                            required
                            type="text"
                            placeholder="Full Name *"
                            className="forminputcontact"
                            value={fullName}
                            onChange={(e) => setFullname(e.target.value)}
                          />
                        </span>
                      </div>
                      <div className="contactforminputcontact col-6">
                        <span className="inputboxcontact">
                          {/* <span className="icon">
                            <FaEnvelope />
                          </span> */}
                          <input
                            required
                            type="email"
                            placeholder="Email *"
                            className="forminputcontact"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </span>
                      </div>
                      <div className="contactforminputcontact col-6">
                        <span className="inputboxcontact">
                          {/* <span className="icon">
                            <FaPhoneAlt />
                          </span> */}
                          <input
                            required
                            type="number"
                            placeholder="Phone *"
                            className="forminputcontact"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                        </span>
                      </div>
                      <div className="contactforminputcontact col-6">
                        <span className="inputboxcontact">
                          {/* <span className="icon">
                            <FaBook />
                          </span> */}
                          <input
                            required
                            type="text"
                            placeholder="Services *"
                            className="forminputcontact"
                            value={service}
                            onChange={(e) => setServices(e.target.value)}
                          />
                        </span>
                      </div>
                      <div className="contactforminputcontact col12contact">
                        <span className="inputboxcontact">
                          <textarea
                            required
                            placeholder="Message *"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            cols={30}
                            rows={4}
                            className="forminputcontact"
                            // onChange={(e) => setMessage(e.target.value)}
                          ></textarea>
                        </span>
                      </div>
                      <div className=" formbtncontact col12contact contactforminputcontact">
                        <span className="inputboxcontact button-wrap">
                          <button className="btn">
                            <span>submit</span>
                          </button>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
                {isFormSubmitted && <p>Form submitted successfully!</p>}
              </div>
            </div>
            <div className="col4contact">
              <div className="rightsidecontact">
                <div className="widgetcontact why-book-us">
                  <div className="linetitlecontact">
                    <h4 className="h4titlecontact">Why Book With Us?</h4>
                  </div>
                  <ul className="bookwithlistcontact">
                    <li>
                      <FaAngleRight />
                      Best Price Guarantee
                    </li>
                    <li>
                      <FaAngleRight />
                      Customer care available 24/7
                    </li>
                    <li>
                      <FaAngleRight />
                      Free Travel Insureance
                    </li>
                    <li>
                      <FaAngleRight />
                      Hand-picked Tours & Activities
                    </li>
                  </ul>
                </div>
                <div className="widgetcontact gaq" style={gaqBgStyle}>
                  <div className="linetitlecontact">
                    <h4 className="h4titlecontact">Got a Question?</h4>
                  </div>
                  <p>
                    Do not hesitage to give us a call. We are an expert team and
                    we are happy to talk to you.
                  </p>
                  <ul className="gaqlistitemcontact">
                    <li>
                      <a href="mailto:holidayplanners@gmail.com">
                        <i>
                          <FaEnvelope />
                        </i>{" "}
                        holidayplanners@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:1234567890">
                        <i>
                          <FaPhoneAlt />
                        </i>{" "}
                        +123 456 7890
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="containermapcontact">
          <div className="rowcontact">
            <div className="col5contact">
              <div className="contactboxwrapcontact">
                <div className="contactboxcontact">
                  <div className="linetitlecontact">
                    <h4 className="h4titlecontact">Rwanda Office</h4>
                  </div>
                  <ul>
                    <li>
                      <a href="/">
                        <span className="icon">
                          <FaMapMarkerAlt />
                        </span>{" "}
                        KN 104, Kigali - Rwanda
                      </a>
                    </li>
                    <li>
                      <a href="tel:1234567890">
                        <span className="icon">
                          <FaPhoneAlt />
                        </span>{" "}
                        +123 456 7890
                      </a>
                    </li>
                    <li>
                      <a href="mailto:holidayplanners@gmail.com">
                        <span className="icon">
                          <FaAt />
                        </span>{" "}
                        holidayplanners@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="contactboxcontact">
                  <div className="linetitlecontact">
                    <h4 className="h4titlecontact">usa office</h4>
                  </div>
                  <ul>
                    <li>
                      <a href="/">
                        <span className="icon">
                          <FaMapMarkerAlt />
                        </span>{" "}
                        KN 104, Kigali - Rwanda
                      </a>
                    </li>
                    <li>
                      <a href="tel:1234567890">
                        <span className="icon">
                          <FaPhoneAlt />
                        </span>{" "}
                        +123 456 7890
                      </a>
                    </li>
                    <li>
                      <a href="mailto:holidayplanners@gmail.com">
                        <span className="icon">
                          <FaAt />
                        </span>{" "}
                        holidayplannersusa@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="contactboxcontact">
                  <div className="linetitlecontact">
                    <h4 className="h4titlecontact">victoria office</h4>
                  </div>
                  <ul>
                    <li>
                      <a href="/">
                        <span className="icon">
                          <FaMapMarkerAlt />
                        </span>{" "}
                        KN 104, Kigali - Rwanda
                      </a>
                    </li>
                    <li>
                      <a href="tel:1234567890">
                        <span className="icon">
                          <FaPhoneAlt />
                        </span>{" "}
                        +123 456 7890
                      </a>
                    </li>
                    <li>
                      <a href="mailto:holidayplanners@gmail.com">
                        <span className="icon">
                          <FaAt />
                        </span>{" "}
                        holidayplannersvic@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col7contact">
              <div className="contactmapboxcontact">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.5542673647913!2d29.642937489314438!3d-1.5092811053131292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dc5b179124681b%3A0x1a740669367be13c!2sGOICO%20Plaza!5e0!3m2!1sen!2srw!4v1697278941115!5m2!1sen!2srw"
                  width="100"
                  height="100"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default contact;
