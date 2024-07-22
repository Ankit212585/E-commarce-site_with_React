import React from "react";
import A1 from "./navebar";
import Announcement from "./Announcement";
import Slider from "./slider";
// import Home from "./Home";
import Categories from "./Categories";
import Products from "./Products";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import Register from "./pages/Register";
import SignUp from "./pages/Login";
import Cart from "./pages/Cart";

export default function index() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Register" Component={Register} />
          <Route path="/SingIn" Component={SignUp} />
          <Route path="/Cart" Component={Cart} />
        </Routes>
        <Announcement />
        <A1 />
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
      </Router>
    </>
  );
}
