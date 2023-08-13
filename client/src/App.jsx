import "./App.css";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Protected from "./components/common/Protected";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route
            exact
            path="/productdetails/:id"
            element={<ProductDetails />}
          />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route
            exact
            path="/signin"
            element={
              <Protected>
                <SignIn />
              </Protected>
            }
          />
          <Route
            exact
            path="/register"
            element={
              <Protected>
                <Register />
              </Protected>
            }
          />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
