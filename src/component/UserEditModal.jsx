const UserEditModal = ({ user, onSave, onClose }) => {
  const handleSave = () => {
    onSave(user);
    onClose();
  };

  return (
    <div className="modal-background">
      <div className="modal-content">
        <h2>Edit User</h2>
        <label>Name:</label>
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
        <label>Password:</label>
        <input
          type="text"
          value={user.password}
          onChange={(e) => onSave({ ...user, password: e.target.value })}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserEditModal;
