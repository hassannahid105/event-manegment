/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { selectUser } = useContext(AuthContext);
  if (!selectUser) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
