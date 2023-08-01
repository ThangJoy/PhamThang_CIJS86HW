import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Hàm để thêm sản phẩm vào giỏ hàng
  return (
    <div className="container">
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <NavBar />
      <Banner />
      <ProductList cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default App;
