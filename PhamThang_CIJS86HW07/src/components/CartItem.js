import React from "react";

const CartItem = ({ item, increaseQuantity, decreaseQuantity }) => {
  return (
    <li>
      <img src={item.img} alt="Product" />
      {item.name} - Giá: {item.price} - Số lượng:
      <button className="increase-quantity-btn" onClick={increaseQuantity}>
        +
      </button>
      <textarea
        value={item.quantity}
        onChange={(e) => {
          const updatedQuantity = parseInt(e.target.value) || 1;
          increaseQuantity(updatedQuantity);
        }}
      ></textarea>
      <button className="decrease-quantity-btn" onClick={decreaseQuantity}>
        {" "}
        -
      </button>
    </li>
  );
};

export default CartItem;
