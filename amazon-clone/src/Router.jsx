import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import SignIn from "./Pages/Auth/SignUp";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/auths" element={<SignIn />}></Route>
      <Route path="/payments" element={<Payment />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/category/:categoryName" element={<Results />}></Route>
      <Route path="/carts" element={<Cart />}></Route>
    </Routes>
  );
}

export default Router;
