import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const CheckoutProtected = ({ children }) => {
  const { email } = useSelector((state) => state.user);
  if (!email) {
    return <Navigate to="/signin" replace={true}></Navigate>;
  }
  return children;
};

export default CheckoutProtected;
