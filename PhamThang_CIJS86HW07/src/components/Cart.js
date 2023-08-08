import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { cartItems, onCloseCart, setCartItems } = props;

  // Hàm để tăng số lượng sản phẩm
  const increaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
  };

  // Hàm để giảm số lượng sản phẩm
  const decreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);
    } else {
      // Remove the item from cartItems when quantity is 1
      const filteredCartItems = updatedCartItems.filter(
        (item, idx) => idx !== index
      );
      setCartItems(filteredCartItems);
    }
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartItems) {
      const itemPrice = item.price * item.quantity;
      totalPrice += itemPrice;
    }
    return totalPrice;
  };

  return (
    <div className="cart-modal-backdrop" onClick={onCloseCart}>
      <div className="cart-modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onCloseCart}>
          &times;
        </span>
        <h2>Giỏ hàng</h2>
        {cartItems.length === 0 ? (
          <p>Giỏ hàng trống</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item, index) => (
                <CartItem
                  key={index}
                  item={item}
                  increaseQuantity={() => increaseQuantity(index)}
                  decreaseQuantity={() => decreaseQuantity(index)}
                />
              ))}
            </ul>
            <div className="total-price">
              Tổng giá tiền: {getTotalPrice().toLocaleString()} VNĐ
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
