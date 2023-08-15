import React from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emptyCart } from "../redux/auth/action";
import { useEffect } from "react";
const OrderSuccess = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  function processProductCode(inputString) {
    const prefix = "productdetails_";
    useEffect(() => {
      dispatch(emptyCart());
    }, [dispatch]);

    if (inputString.startsWith(prefix)) {
      const modifiedString = inputString.substring(
        prefix.length,
        prefix.length + 5
      );
      return modifiedString;
    } else {
      return inputString.substring(0, 5);
    }
  }
  return (
    <>
      <Navbar />
      <section>
        <main className="grid min-h-full h-100  place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-blue-600">
              Order Successfully Placed
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Order Number # {processProductCode(id)}
            </h1>
            {/* <p className="mt-6 text-base leading-7 text-gray-600">
              You can check your order in My Account My Orders
            </p> */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Go back home
              </Link>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
};

export default OrderSuccess;
