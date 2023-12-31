import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../redux/auth/action";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import shopicon from "../../assets/images/shop-icon.png";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const dispatch = useDispatch();
  const { cart, email } = useSelector((state) => state.user);

  const handleSignout = (e) => {
    e.preventDefault();
    dispatch(signOut());
  };

  return (
    <>
      <nav className="sticky z-20 top-0">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                      <Link to="/">
                        <img
                          className="h-8 w-auto"
                          src={shopicon}
                          alt="ShopTrend"
                        />
                      </Link>
                      <Link to="/">
                        <p className="text-xl text-white font-semibold mx-2">
                          ShopTrend
                        </p>
                      </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        {!email && (
                          <Link to="/signin">
                            <button
                              type="button"
                              className="relative rounded-full bg-lime-500 p-1 text-white hover:bg-lime-600 mx-2 w-24 font-bold"
                            >
                              Sign In
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <Link to="/cart">
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <ShoppingCartIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>
                    </Link>
                    {cart.items.length > 0 && (
                      <Link className="z-10" to="/cart">
                        <span className="inline-flex items-center rounded-full bg-red-500 hover:bg-red-700 mb-7 -ml-4  px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-red-600/10">
                          {cart.items.length}
                        </span>
                      </Link>
                    )}

                    {/* Profile dropdown */}
                    {email && (
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={(e) => handleSignout(e)}
                                  className={classNames(
                                    active
                                      ? "bg-blue-500 w-full text-white"
                                      : "",
                                    "block px-4 py-2  mx-auto font-semibold text-sm text-gray-700"
                                  )}
                                >
                                  Sign out
                                </button>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </nav>
    </>
  );
};

export default Navbar;
