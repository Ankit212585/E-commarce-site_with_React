import React from "react";
import A1 from "./navebar";
import Announcement from "./Announcement";
import Slider from "./slider";
// import Home from "./Home";
import Categories from "./Categories";
import Products from "./Products";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

export default function index() {
  return (
    <>
      <Announcement />
      <A1 />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
}
