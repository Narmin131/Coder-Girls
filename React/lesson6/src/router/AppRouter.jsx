import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Shop from "../pages/Shop/Shop";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import ProductDetail from "../pages/Detail/ProductDetail";
import Login from "../pages/Login/Login";
const AppRouter = () => {

  const [message, setMessage] = useState("hello");

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home oturduyumMesaj={message}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
