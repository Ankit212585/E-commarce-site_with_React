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
import Home from "./Home";
import productlist from "./pages/Productlist";
import Product from "./pages/product";

export default function index() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Register" Component={Register} />
          <Route path="/SingIn" Component={SignUp} />
          <Route path="/Cart" Component={Cart} />
          <Route path="/productlist" Component={productlist} />
          <Route path="/Product" Component={Product} />
        </Routes>
      </Router>
    </>
  );
}
