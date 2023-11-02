import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate ,useParams} from "react-router-dom";
const UserEditModal = ({ user, onSave, onClose }) => {
  const navigate =useNavigate()
  const {id}=useParams();
  const{values, setValues}= useState({
    id: id,
    fullNames:'',
    email: '',
    PhoneNo:'',
  })
  const handleSave = (e) => {
    e.preventDefault();
    axios.put(""+id, values)
    .then(res => {
      navigate('/');
    })
    .catch(err => console.log(err))
    onSave(user);
    onClose();
  };
// useEffect(() => {
//   axios
//     .get("/${id}")
//     .then((res) => {
//       setValues({
//         ...values,
//         fullNames: res.data.name,
//         email: res.data.email,
//         PhoneNo: res.data.PhoneNo,
//       });
//     })
//     .catch((err) => console.log(err));
// })
  return (
    <div className="modal-background">
      <div className="modal-content">
        <h2>Edit User</h2>
        <label>Full Name:</label>
        <input
          type="text"
          value={user.fullNames}
          onChange={(e) => onSave({ ...user, fullNames: e.target.value })}
        />
        <label>Email:</label>
        <input
          type="text"
          value={user.email}
          onChange={(e) => onSave({ ...user, email: e.target.value })}
        />
        <label>Phone number:</label>
        <input
          type="number"
          value={user.PhoneNo}
          onChange={(e) => onSave({ ...user, PhoneNo: e.target.value })}
        />
        {/* <label>Password:</label>
        <input
          type="text"
          value={user.password}
          onChange={(e) => onSave({ ...user, password: e.target.value })}
        /> */}
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserEditModal;
