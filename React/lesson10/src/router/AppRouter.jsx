import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Shop from "../pages/Shop/Shop";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import ProductDetail from "../pages/Detail/ProductDetail";
import Login from "../pages/Login/Login";
import { GlobalThemeContext } from "../Context/ThemeContext";
import ProductPage from "../pages/ProductPage/ProductPage";
import Cart from "../pages/Cart/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopToBtn from "../components/TopToBtn";
const AppRouter = () => {
  const { darkMode } = useContext(GlobalThemeContext);

  return (
    <>
      <main className={darkMode ? "dark" : "light"}>
        <BrowserRouter>
          <ToastContainer />
          <Header />
          <TopToBtn/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </>
  );
};

export default AppRouter;
