import React from "react";
import Header from "../Static/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Static/Footer";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
