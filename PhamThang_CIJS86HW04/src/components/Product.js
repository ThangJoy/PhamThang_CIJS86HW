import React, { useState } from "react";

const Product = (props) => {
  const { img, name, price, discount, setCartItems, cartItems } = props;
  const [showModal, setShowModal] = useState(false); // State để điều khiển hiển thị modal

  // Hàm để mở modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Hàm để đóng modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Chức năng thêm sản phẩm vào giỏ hàng
  const addToCart = () => {
    // Kiểm tra xem sản phẩm đã có trong giỏ hàng
    const existingCartItem = cartItems.find((item) => item.name === name);

    if (existingCartItem) {
      // Nếu sản phẩm tồn tại trong giỏ hàng, hãy cập nhật số lượng của nó
      const updatedCartItems = cartItems.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      // Nếu sản phẩm không tồn tại trong giỏ hàng, hãy thêm nó với số lượng 1
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { img, name, price, discount, quantity: 1 },
      ]);
    }
  };

  return (
    <div className="product">
      <img src={img} alt={name} className="product-img" />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-price">
          Giá: {Number(price).toLocaleString()} VNĐ
        </div>
        {discount && (
          <div className="discount">
            <span className="product-discount">-{discount}%</span>
            <span className="real-price">
              {Number(
                (Number(price) * (100 + Number(discount))) / 100
              ).toLocaleString()}
            </span>
          </div>
        )}
        <button className="see-detail-btn" onClick={handleShowModal}>
          Show detail
        </button>
      </div>

      {/* Modal chi tiết sản phẩm */}
      {showModal && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseModal}>
              &times;
            </span>
            <div className="row">
              <div className="col-md-6">
                <img src={img} alt={name} className="modal-product-img" />
              </div>
              <div className="col-md-6">
                <div className="modal-product-info">
                  <div className="modal-product-name">{name}</div>
                  <div className="modal-product-price">
                    Giá: {Number(price).toLocaleString()} VNĐ
                  </div>
                  {discount && (
                    <div className="modal-discount">
                      <span className="modal-product-discount">
                        -{discount}%
                      </span>
                      <span className="modal-real-price">
                        {Number(
                          (Number(price) * (100 + Number(discount))) / 100
                        ).toLocaleString()}
                      </span>
                    </div>
                  )}
                  <div className="inst-con">
                    <span className="modal-installment">Trả góp 0%</span>
                    <span className="modal-condition">Mới</span>
                  </div>

                  <button className="add-to-cart-btn" onClick={addToCart}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
