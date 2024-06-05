import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Offer from "./components/Offer";
import Exclusive from "./components/Exclusive";
import Footer from "./components/Footer";
import Review from "./components/Review";
import ProductPage from "./components/ProductPage";
import AllProducts from "./components/AllProducts";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
            path="/"
            element={
              <>
                {" "}
                <Home /> 
                <About /> 
                <Categories /> 
                <Offer /> 
                <Exclusive />{" "}
                <Review /> 
                <ContactUs /> 
                <Footer />{" "}
              </>
            }
          />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
