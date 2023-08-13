import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const Protected = ({ children }) => {
  const { email } = useSelector((state) => state.user);
  if (email) {
    return <Navigate to="/" replace={true}></Navigate>;
  }
  return children;
};

export default Protected;
