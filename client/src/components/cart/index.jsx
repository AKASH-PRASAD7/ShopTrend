import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import EmptyCart from "./EmptyCart";
import { removeItemFromCart, changeItemQyty } from "../../redux/auth/action";

const index = () => {
  const { cart } = useSelector((state) => state.user);
  const { items } = cart;
  const dispatch = useDispatch();

  const handleRemove = (e, ID) => {
    e.preventDefault();
    console.log(ID);
    dispatch(removeItemFromCart(ID));
  };

  const handleQuantity = (e, ID) => {
    e.preventDefault();
    console.log(e.target.value);
    console.log(ID);
    dispatch(changeItemQyty(ID, e.target.value));
  };

  if (items.length === 0) {
    return <EmptyCart />;
  }
  return (
    <>
      <section>
        <div>
          <div className="mx-auto mx-8 mt-12 mx-6 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
                Cart
              </h1>
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {items.map((product) => (
                    <li key={product.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-lime-600 text-base font-medium text-gray-900">
                            <h3>
                              <p>{product.title}</p>
                            </h3>
                            <div>
                              <p className="ml-4">
                                ${product.qty * product.price}
                              </p>
                              <p className="text-sm ml-4  text-red-700 line-through  font-medium text-gray-900">
                                $
                                {product.qty *
                                  Math.round(
                                    product.price /
                                      (1 - product.discountPercentage / 100)
                                  )}
                              </p>
                            </div>
                          </div>

                          {/* <p className="mt-1 text-sm text-gray-500">
                            {product.color}
                          </p> */}
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="text-gray-500">
                            <label
                              htmlFor="quantity"
                              className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                            >
                              Qty
                            </label>
                            <select
                              onChange={(e) => handleQuantity(e, product.id)}
                              value={product.qty}
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>

                          <div className="flex">
                            <button
                              type="button"
                              onClick={(e) => handleRemove(e, product.id)}
                              className="font-medium text-blue-600 hover:text-blue-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base text-lime-600 font-medium text-gray-900">
                <p>Subtotal</p>
                <div>
                  <p>
                    $
                    {items.reduce(
                      (accum, item) => accum + item.qty * item.price,
                      0
                    )}
                  </p>
                  <p className="text-sm text-red-700 line-through  font-medium text-gray-900">
                    $
                    {items.reduce(
                      (accum, item) =>
                        accum +
                        Math.round(
                          (item.price * item.qty) /
                            (1 - item.discountPercentage / 100)
                        ),
                      0
                    )}
                  </p>
                </div>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <Link
                  to="/checkout"
                  className="flex w-1/3 mx-auto items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                >
                  Checkout
                </Link>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or{"  "}
                  <Link to="/">
                    <button
                      type="button"
                      className="font-medium text-blue-600 hover:text-blue-500"
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
