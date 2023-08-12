import React from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import ProductsFilter from "../components/Products/ProductsFilter";
import Productslist from "../components/Products/Productslist";

const Products = () => {
  return (
    <>
      <Navbar />
      <ProductsFilter />
      <Footer />
    </>
  );
};

export default Products;
