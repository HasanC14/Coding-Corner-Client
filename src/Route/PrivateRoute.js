import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { User, loading } = useContext(AuthContext);
  let location = useLocation();
  if (loading) {
    console.log("loading");
    return <div>Loading...</div>;
  }
  if (!User) {
    return <Navigate to="/Login" state={{ from: location }} replace></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;
