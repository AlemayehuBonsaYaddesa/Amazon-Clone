import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Auth from "./Pages/Auth/Auth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51SZrdDQKYGzjN9FKdwsvI7DKINXoxJvKYDEHrfjXzovF0imYgDXBkc6WpJNPyV1c0m1yWHYbgWsi5XW5O9eOxM3U00pfsgJ1P2"
);

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/auths" element={<Auth />}></Route>
        <Route
          path="/payments"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        ></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/category/:categoryName" element={<Results />}></Route>
        <Route path="/products/:productId" element={<ProductDetail />}></Route>
        <Route path="/carts" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
