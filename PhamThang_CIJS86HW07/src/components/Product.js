import React, { useState } from "react";

const Product = (props) => {
  const { img, name, price, discount, chip, sizeScreen, ram, rom, setCartItems, cartItems, info } = props;
  const [showModal, setShowModal] = useState(false); // State để điều khiển hiển thị modal

  // Hàm để mở modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Hàm để đóng modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePrice = (price) => {
    let newPrice = price.split('').filter(char=>!isNaN(char)).join('');
    return newPrice;
  }
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
    <div className={info ? "product" : "productforyou"}>
      <img src={img} alt={name} className="product-img" />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-price">
          {Number(handlePrice(price)).toLocaleString()}đ
        </div>
        {discount && (
          <div className="discount">
            
            <span className="real-price">
              {Math.trunc(Number(
                (Number(handlePrice(price)) * (1 + Number(discount)/100))
              )).toLocaleString()}đ
            </span>

            <span className="product-discount">-{discount}%</span>
          </div>
        )}
          
            {
              chip && (<div className="chip-info">Chipset: {chip}</div>)
            } 
            {
              sizeScreen && (<div className="screen-info">Kích thước màn hình: {sizeScreen}</div>)
            } 
            {
              ram && (<div className="ram-info">RAM: {ram}GB</div>)
            } 
            {
              rom && (<div className="rom-info">Bộ nhớ trong: {rom}GB</div>)
            } 
          {info &&(<div className="compare">
            <span><button className="compare-btn">+</button></span>
            <span>Thêm vào so sánh</span>
            
            
          </div>)}
        
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
                      
                      <span className="modal-real-price">
                        {Number(
                          (Number(price) * (100 + Number(discount))) / 100
                        ).toLocaleString()}
                      </span>
                      <span className="modal-product-discount">
                        -{discount}%
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
