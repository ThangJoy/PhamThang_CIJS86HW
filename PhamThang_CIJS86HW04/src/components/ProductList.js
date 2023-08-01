import React from "react";
import Product from "./Product";
import hotTrend from "../data/data";
const ProductList = (props) => {
  const { setCartItems, cartItems } = props;
  return (
    <div className="container">
      <h4> Top 10 sản phẩm điện thoại được yêu thích</h4>
      <div className="row">
        {hotTrend.map((product, index) => (
          <div key={index} className="col-md-3">
            <Product
              img={product.img}
              name={product.name}
              price={product.price}
              discount={product.discount}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;
