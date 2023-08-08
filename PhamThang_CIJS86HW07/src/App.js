import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import { allProduct, productForU, hotTrend } from "./data/data";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Hàm để thêm sản phẩm vào giỏ hàng
  return (
    <div className="container">
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <NavBar />
      <Banner />
      <div className="hotTrend"> Top 10 sản phẩm điện thoại được yêu thích</div>
      <ProductList product={hotTrend} cartItems={cartItems} setCartItems={setCartItems} info={true} />
      <Filter/>
      <ProductList product={allProduct} cartItems={cartItems} setCartItems={setCartItems} info={true}/>
      <div className="foryou"> 
        <div>Sản phẩm dành riêng cho bạn</div> 
      </div>
      <ProductList product={productForU} cartItems={cartItems} setCartItems={setCartItems} info={false}/>
      <Footer/>
    </div>
  );
};

export default App;
