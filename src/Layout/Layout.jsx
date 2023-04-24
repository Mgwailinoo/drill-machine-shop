import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

import Home from "../components/Home";
import Footer from "../components/Footer/Footer";
import Routes from "../Routes/Routes";

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes />

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Layout;
