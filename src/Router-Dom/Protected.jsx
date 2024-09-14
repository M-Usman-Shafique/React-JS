import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ user, children }) => {
  if (user === null) {
    // If user is null, it's still loading, return null to avoid rendering anything
    return null;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default Protected;