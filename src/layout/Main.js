import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../components/pages/Home/Home";

const Main = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
      <Outlet />
    </div>
  );
};

export default Main;
