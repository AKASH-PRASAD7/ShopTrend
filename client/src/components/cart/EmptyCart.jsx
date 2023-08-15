import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
const EmptyCart = () => {
  return (
    <>
      <div className="container-fluid  mt-100">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body cart ">
                <div className="col-sm-12 empty-cart-cls text-center">
                  <img
                    src="https://i.imgur.com/dCdflKN.png"
                    className="w-48 mx-auto h-48"
                  />
                  <h3>
                    <strong>Your Cart is Empty</strong>
                  </h3>
                  <h4>Add something to make me happy :)</h4>
                  <Link to="/">
                    <button className="bg-lime-500 hover:bg-lime-700 m-2 text-white font-bold py-2 px-4 rounded-full">
                      Continue shopping
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
