import React from 'react';

const Product = (props) => {
  const { img, name, price, discount } = props;
  return (
    <div className="product">
      <img src={img} alt={name} className="product-img" />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-price">Giá: {price}</div>
        {discount && <div className="product-discount"> -{discount}%</div>}
      </div>
    </div>
  );
};

export default Product;
