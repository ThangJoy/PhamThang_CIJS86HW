// NavBar.js

import React from "react";

const NavBar = () => {
  const navStyle = {
    backgroundColor: "#FFFFFF",
  };
  return (
    <nav className="py-3" style={navStyle}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-2 d-flex flex-nowrap flex-fill">
            <div className="icon-container">
              <img
                className="icon-img"
                src="/images/icons8-menu-50.png"
                alt="Icon"
              />
            </div>
            <a href="#">Danh mục sản phẩm</a>
          </div>
          <div className="col-2 d-flex flex-nowrap flex-fill">
            <div className="icon-container">
              <img
                className="icon-img"
                src="/images/icons8-delivery-50.png"
                alt="Icon"
              />
            </div>
            <a href="#">Giao lắp chuyên nghiệp</a>
          </div>
          <div className="col-2 d-flex flex-nowrap flex-fill">
            <div className="icon-container">
              <img
                className="icon-img"
                src="/images/icons8-fix-50.png"
                alt="Icon"
              />
            </div>
            <a href="#">Bảo hành nhanh gọn</a>
          </div>
          <div className="col-2 d-flex flex-nowrap flex-fill">
            <div className="icon-container">
              <img
                className="icon-img"
                src="/images/icons8-bookmark-24.png"
                alt="Icon"
              />
            </div>
            <a href="#">Tổng hợp khuyến mãi</a>
          </div>
          <div className="col-2 d-flex flex-nowrap flex-fill">
            <div className="icon-container">
              <img
                className="icon-img"
                src="/images/icons8-diamond-50.png"
                alt="Icon"
              />
            </div>
            <a href="#">Nguyễn Kim Luxury</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
