import React from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../../Contexts/UserContext";
import User from "../../app/User/User";

function ProtectedRoute() {
  const { login } = React.useContext(UserContext);
  if (login === true) return <User />;
  else if (login === false) return <Navigate to="/login" />;
  else return <Navigate to="/login" />;
}

export default ProtectedRoute;
