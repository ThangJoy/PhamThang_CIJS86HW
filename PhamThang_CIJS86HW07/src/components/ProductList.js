import React from "react";
import Product from "./Product";

const ProductList = (props) => {
  const { product, setCartItems, cartItems, info } = props;

  return (
    <div className="container">
      <div className="row">
        {product.map((product, index) => (
          <div key={index} className="items-5">
            <Product
              img={product.img}
              name={product.name}
              price={product.price}
              discount={product.discount}
              chip={info ? product.chip : null}
              sizeScreen={info ? product.sizeScreen : null}
              ram={info ? product.ram : null}
              rom={info ? product.rom : null}
              info={info}
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
