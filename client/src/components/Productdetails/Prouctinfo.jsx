import React, { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/product/action";
import LoadingProductsDetails from "./LoadingProductDetails";
import Rating from "../common/Rating";
import { addToCart } from "../../redux/auth/action";

const product = {
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Prouctinfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productDetails, loading, error } = useSelector(
    (state) => state.product
  );
  const { email } = useSelector((state) => state.user);
  const { id } = useParams();
  const { cart } = useSelector((state) => state.user);
  const { items } = cart;

  //check whether items already in cart or not
  const cuurItem = items.find((currentItem) => currentItem.id == id);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const handleCart = (e) => {
    e.preventDefault();
    const cart1 = {
      ...productDetails,
      qty: 1,
    };
    if (!items) {
      dispatch(addToCart([cart1]));
    } else {
      let newItems = [...items, cart1];
      dispatch(addToCart(newItems));
    }
  };

  const handleBuy = (e) => {
    e.preventDefault();
    console.log(productDetails);
    const cart1 = {
      ...productDetails,
      qty: 1,
    };
    if (!items) {
      dispatch(addToCart([cart1]));
    } else {
      let newItems = [...items, cart1];
      dispatch(addToCart(newItems));
    }

    navigate("/checkout");
  };
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, []);
  if (loading) {
    return <LoadingProductsDetails />;
  }
  if (error) {
    <p>Failed to get products error: {error}</p>;
  }

  return (
    <>
      <section>
        <div className="bg-gray-200">
          <div className="pt-6">
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <img
                  src={
                    !loading && productDetails?.images[0]
                      ? productDetails?.images[0]
                      : productDetails?.thumbnail
                  }
                  alt={productDetails?.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                  <img
                    src={
                      !loading && productDetails?.images[1]
                        ? productDetails?.images[1]
                        : productDetails?.thumbnail
                    }
                    alt={!loading && productDetails?.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                  <img
                    src={
                      !loading && productDetails?.images[2]
                        ? productDetails?.images[2]
                        : productDetails?.thumbnail
                    }
                    alt={!loading && productDetails?.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <img
                  src={
                    !loading && productDetails?.images[3]
                      ? productDetails?.images[3]
                      : productDetails?.thumbnail
                  }
                  alt={!loading && productDetails?.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {!loading && productDetails?.title}
                </h1>
              </div>

              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <div>
                  <p className="text-3xl tracking-tight text-lime-600">
                    ${!loading && productDetails?.price}
                  </p>
                  <p className="text-sm text-red-700 line-through  font-medium text-gray-900">
                    $
                    {!loading &&
                      Math.round(
                        productDetails?.price /
                          (1 - productDetails?.discountPercentage / 100)
                      )}
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <Rating
                        size={"large"}
                        value={Math.round(!loading && productDetails?.rating)}
                      />
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                    <a
                      href={reviews.href}
                      className="ml-3 text-sm font-medium text-blue-600 hover:text-blue-500"
                    >
                      {reviews.totalCount} reviews
                    </a>
                  </div>
                </div>

                <form className="mt-10">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Color</h3>

                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a color
                      </RadioGroup.Label>
                      <div className="flex items-center space-x-3">
                        {product.colors.map((color) => (
                          <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                color.selectedClass,
                                active && checked ? "ring ring-offset-1" : "",
                                !active && checked ? "ring-2" : "",
                                "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                              )
                            }
                          >
                            <RadioGroup.Label as="span" className="sr-only">
                              {color.name}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.class,
                                "h-8 w-8 rounded-full border border-black border-opacity-10"
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  <Link to="/checkout">
                    <button
                      onClick={(e) => handleBuy(e)}
                      type="submit"
                      className="mt-10 text-xl flex w-full items-center justify-center rounded-md border border-transparent bg-lime-600 px-8 py-3 text-base font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Buy now
                    </button>
                  </Link>

                  <button
                    type="submit"
                    onClick={(e) => handleCart(e)}
                    className={`${
                      cuurItem ? `hidden` : `block`
                    } mt-10 text-xl flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                  >
                    Add to <ShoppingCartIcon className="h-8 px-2" />
                  </button>
                </form>
              </div>

              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      {!loading && productDetails?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prouctinfo;
