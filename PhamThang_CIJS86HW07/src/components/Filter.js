import React from "react";

const Filter = () => {
  return (
    <div className="filter-container">
      <button className="filter-button">
        <img className="filter-logo" src="/images/icons8-filter-64.png" />
        Bộ lọc
      </button>
      <button className="filter-button">Thương hiệu</button>
      <button className="filter-button">Giá bán</button>
      <button className="filter-button">Màn hình</button>
      <button className="filter-button">Camera sau</button>
      <button className="filter-button">Camera trước</button>
      <button className="filter-button">Ram</button>
      <button className="filter-button">Bộ nhớ trong</button>
    </div>
  );
};

export default Filter;
