import React from "react";
import { Link } from "react-router-dom";
import productsData from "../../assets/data/products.json";
import Rating from "../common/Rating";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../../redux/product/action";
import LoadingProducts from "./LoadingProducts";

const Productslist = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.product);

  // console.log(prod);
  useEffect(() => {
    dispatch(getAllProducts(10));
  }, []);

  if (loading) {
    return <LoadingProducts />;
  }
  if (error) {
    <p>Failed to get products error: {error}</p>;
  }

  return (
    <>
      <div>
        <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/productdetails/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </Link>
                    </h3>
                    <div className="mt-1 text-sm text-gray-500">
                      <Rating value={Math.round(product.rating)} />
                      <span>{product.rating} out of 5</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-md text-lime-800 font-medium text-gray-900">
                      ${product.price}
                    </p>
                    <p className="text-sm text-red-700 line-through  font-medium text-gray-900">
                      $
                      {Math.round(
                        product.price / (1 - product.discountPercentage / 100)
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Productslist;
