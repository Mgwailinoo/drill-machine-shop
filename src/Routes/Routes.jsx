import React from "react";
import { Routes as Router, Route } from "react-router-dom";
import Home from "../components/Home";
import Authenticate from "../components/Authentication/Authenticate";
import Contact from "../components/Contact/Contact";
import Blog from "../components/Blog/Blog";
import AboutPage from "../components/About/AboutPage";
import HandTool from "../components/HandTool/HandTool";
import Electrical from "../components/Electrical/Electrical";
import Cart from "../components/Cart/Cart";
import WishList from "../components/WishList/WishList";
import CustomPayment from "../components/Payment/CustomPayment";
import ProductDetails from "../components/ProductDetails/ProductDetails";
const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/handtools" element={<HandTool />} />
      <Route path="/electricals" element={<Electrical />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/authenticate" element={<Authenticate />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/payment" element={<CustomPayment />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} />
    </Router>
  );
};

export default Routes;
