import React from "react";
import Navbar from "../components/common/Navbar";
import ProductsFilter from "../components/Products/ProductsFilter";
import Productslist from "../components/Products/Productslist";

const Products = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <ProductsFilter />
        <Productslist />
      </div>
    </>
  );
};

export default Products;
