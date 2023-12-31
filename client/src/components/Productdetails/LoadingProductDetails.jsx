import React from "react";

const LoadingProductDetails = () => {
  return (
    <>
      <section className="w-100 h-100 p-4 flex gap-4 flex-wrap">
        <div className="mx-auto bg-white rounded shadow-lg w-full h-full rounded-2xl">
          <div className="h-48 p-3 overflow-hidden bg-gray-200 animate-pulse"></div>
          <div className="p-3 h-">
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded  animate-pulse"></div>
              <div className="..."></div>
              <div className="col-span-2 ..."></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoadingProductDetails;
