import React from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Checkoutcomp from "../components/checkout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Checkout = () => {
  const navigate = useNavigate();
  const { email } = useSelector((state) => state.user);

  useEffect(() => {
    if (!email) {
      navigate("/signin");
    }
  }, [email]);
  return (
    <>
      <Navbar />
      <Checkoutcomp />
      <Footer />
    </>
  );
};

export default Checkout;
