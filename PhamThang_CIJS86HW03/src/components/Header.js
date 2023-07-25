import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#FE0100',
  };

  return (
    <header className="py-3" style={headerStyle}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-2">
            <h2 className="text-white">NGUYENKIM</h2>
          </div>
          <div className="col-1 d-flex flex-nowrap flex-fill">
            <div className="icon-container">
              <img className="icon-img" src="/images/icons8-location-50.png" alt="Icon" />
            </div>
            <a href="#">Xem giá tại TP.HCM</a>
          </div>
          <div className="col-3 search-bar">
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Bạn cần tìm gì hôm nay ?" aria-label="Search" />
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </form>
          </div>
          <div className="col-1 d-flex flex-nowrap flex-fill">
            <div className="icon-container">
              <img className="icon-img" src="/images/icons8-cart-50.png" alt="Icon" />
            </div>
            <a href="#">Giỏ hàng</a>
          </div>
          <div className="col-1 d-flex flex-nowrap flex-fill">
            <div className="icon-container">
              <img className="icon-img" src="/images/icons8-backup-50.png" alt="Icon" />
            </div>
            <a href="#">Tra cứu đơn hàng</a>
          </div>
          <div className="col-1 d-flex flex-nowrap flex-fill">
            <div className="icon-container">
              <img className="icon-img" src="/images/icons8-account-50.png" alt="Icon" />
            </div>
            <a href="#">Tài khoản</a>
          </div>
          <div className="col-1 d-flex flex-nowrap flex-fill">
            <div className="icon-container">
              <img className="icon-img" src="/images/icons8-call-50.png" alt="Icon" />
            </div>
            <a href="#">Gọi mua: 1800 6800(Miễn phí)</a>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
