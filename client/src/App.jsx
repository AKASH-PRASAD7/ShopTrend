import "./App.css";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import ErrorPage from "./pages/ErrorPage";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/productdetails" element={<ProductDetails />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
