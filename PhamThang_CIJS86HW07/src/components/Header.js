import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Cart from "./Cart"; // Import component Cart

const Header = (props) => {
  const { cartItems, setCartItems } = props;
  const headerStyle = {
    backgroundColor: "#FE0100",
  };

  const [showCart, setShowCart] = useState(false); // State để điều khiển hiển thị modal giỏ hàng

  // Hàm để hiển thị modal giỏ hàng
  const handleShowCart = () => {
    setShowCart(true);
  };

  // Hàm để đóng modal giỏ hàng
  const handleCloseCart = () => {
    setShowCart(false);
  };
  const getTotalQuantity = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].quantity;
    }
    return total;
  };
  return (
    <header className="py-3" style={headerStyle}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-2">
            <img className="logo"src="/images/Screenshot 2023-08-08 at 15.22.38.png"/>
          </div>
          <div className="col-1 d-flex flex-nowrap flex-fill">
            <div className="icon-container">
              <img
                className="icon-img"
                src="/images/icons8-location-50.png"
                alt="Icon"
              />
            </div>
            <a href="#">Xem giá tại TP.HCM</a>
          </div>
          <div className="col-3 search-bar">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Bạn cần tìm gì hôm nay ?"
                aria-label="Search"
              />
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </form>
          </div>
          <div className="col-1 d-flex flex-nowrap flex-fill">
            <div className="icon-container">
              {" "}
              {/* Thêm sự kiện onClick */}
              <img
                className="icon-img"
                src="/images/icons8-cart-50.png"
                alt="Icon"
              />
            </div>
            <a href="#" onClick={handleShowCart}>
              Giỏ hàng({getTotalQuantity()})
            </a>
          </div>

          <div className="col-1 d-flex flex-nowrap flex-fill">
            <div className="icon-container">
              <img
                className="icon-img"
                src="/images/icons8-backup-50.png"
                alt="Icon"
              />
            </div>
            <a href="#">Tra cứu đơn hàng</a>
          </div>
          <div className="col-1 d-flex flex-nowrap flex-fill">
            <div className="icon-container">
              <img
                className="icon-img"
                src="/images/icons8-account-50.png"
                alt="Icon"
              />
            </div>
            <a href="#">Tài khoản</a>
          </div>
          <div className="col-1 d-flex flex-nowrap flex-fill">
            <div className="icon-container">
              <img
                className="icon-img"
                src="/images/icons8-call-50.png"
                alt="Icon"
              />
            </div>
            <a href="#">Gọi mua: 1800 6800(Miễn phí)</a>
          </div>
        </div>
      </div>
      {/* Modal giỏ hàng */}
      {showCart && (
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          onCloseCart={handleCloseCart}
        />
      )}
    </header>
  );
};

export default Header;
