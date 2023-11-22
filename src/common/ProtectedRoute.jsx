import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...props }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Component {...props} />;
};

export default ProtectedRoute;
