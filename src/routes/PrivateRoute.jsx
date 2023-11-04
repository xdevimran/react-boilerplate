/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

const PrivetRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  if (!user) {
    return <progress className="progress w-full bg-blue-600"></progress>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" replace />;
};

export default PrivetRoute;
