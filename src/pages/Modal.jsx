import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../pages/Modal.css";
const Modal = ({ show, handleClose }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    
    <div className={showHideClassName}>
      <section className="modal-main">
        <Link to="/">
          {" "}
          <FontAwesomeIcon
            icon={faTimes}
            className="close-icon"
            onClick={handleClose}
          />
        </Link>
      </section>
    </div>
  );
};

export default Modal;
