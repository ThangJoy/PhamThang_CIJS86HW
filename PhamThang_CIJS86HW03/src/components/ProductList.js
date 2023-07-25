import React from 'react';
import Product from './Product';

const ProductList = () => {
    let hotTrend=[
        {
            img:"https://cdn.nguyenkimmall.com/images/thumbnails/180/180/product/829/dien-thoai-iphone-14-pro-max-128gb-tim-1.jpg",
            name:"iPhone 14 Pro Max 128GB Tím",
            price:"26790000đ",
            discount:"19",
            chip:"Apple A16 Bionic 6 nhân",
            sizeScreen:"6.7",
            ram:"6",
            rom:"12"
        },
        {
            img:"https://cdn.nguyenkimmall.com/images/thumbnails/180/180/product/829/dien-thoai-iphone-14-pro-max-128gb-vang-1.jpg",
            name:"iPhone 14 Pro Max 128GB Vàng",
            price:"26790000đ",
            discount:"19",
            chip:"Apple A16 Bionic",
            sizeScreen:"6.7",
            ram:"6",
            rom:"128"
        },
        {
            img:"https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/827/10053257-dien-thoai-samsung-galaxy-a04s-4gb-64gb-xanh-1.jpg",
            name:"Samsung Galaxy A04s 4GB/64GB Xanh",
            price:"2990000đ",
            discount:"25",
            chip:"Exynos 850 (8nm)",
            sizeScreen:"6.5",
            ram:"6",
            rom:"64"
        },
        {
            img:"https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/832/10053536-dien-thoai-oppo-a77s-8gb-128gb-xanh-1.jpg",
            name:"Điện thoại OPPO A77s 8GB/128GB Xanh",
            price:"5490000đ",
            discount:"13",
            chip:"Qualcomm Snapdragon 680 ",
            sizeScreen:"6.58",
            ram:"6",
            rom:"128"
        },
        {
            img:"https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/856/10054597-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-do-1.jpg",
            name:"Samsung Galaxy A14 5G 4GB/128GB Đỏ",
            price:"3990000đ",
            discount:"23",
            chip:"Mediatek MT6833 Dimensity 700 (7 nm)",
            sizeScreen:"6",
            ram:"4",
            rom:"16"
        }
    ]

    let allProduct=[

        {
            img:"https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/834/10053681-dien-thoai-samsung-galaxy-a04-3gb-32gb-den-1.jpg",
            name:"Samsung Galaxy A04 3GB/32GB Đen",
            price:"2090000đ",
            discount:"20",
            chip:"MediaTek Helio P35 8 nhân",
            sizeScreen:"6.5",
            ram:"2",
            rom:"12"
        },
        {
            img:"https://cdn.nguyenkimmall.com/images/thumbnails/180/180/product/829/dien-thoai-iphone-14-pro-max-128gb-tim-1.jpg",
            name:"iPhone 14 Pro Max 128GB Tím",
            price:"26790000đ",
            discount:"19",
            chip:"Apple A16 Bionic 6 nhân",
            sizeScreen:"6.7",
            ram:"6",
            rom:"12"
        },
        {
            img:"https://cdn.nguyenkimmall.com/images/thumbnails/180/180/product/829/dien-thoai-iphone-14-pro-max-128gb-vang-1.jpg",
            name:"iPhone 14 Pro Max 128GB Vàng",
            price:"26790000đ",
            discount:"19",
            chip:"Apple A16 Bionic",
            sizeScreen:"6.7",
            ram:"6",
            rom:"128"
        },
        {
            img:"https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/856/10054629-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-bac-1.jpg",
            name:"Samsung Galaxy A14 5G 4GB/128GB Bạc",
            price:"3.990.000đ",
            discount:"23",
            chip:"Mediatek MT6833 Dimensity 700 (7 nm)",
            sizeScreen:"6.6",
            ram:"4",
            rom:"64"
        },
    
        {
            img:"https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/827/10053257-dien-thoai-samsung-galaxy-a04s-4gb-64gb-xanh-1.jpg",
            name:"Samsung Galaxy A04s 4GB/64GB Xanh",
            price:"2990000đ",
            discount:"25",
            chip:"Exynos 850 (8nm)",
            sizeScreen:"6.5",
            ram:"6",
            rom:"64"
        },
        {
            img:"https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/827/10053348-dien-thoai-samsung-galaxy-a04s-4gb-64gb-den-1.jpg",
            name:"Samsung Galaxy A04s 4GB/64GB Đen",
            price:"2.990.000đ",
            discount:"12",
            chip:"Snapdragon ",
            sizeScreen:"6.7",
            ram:"6",
            rom:"12"
        },
        {
            img:"https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/832/10053536-dien-thoai-oppo-a77s-8gb-128gb-xanh-1.jpg",
            name:"Điện thoại OPPO A77s 8GB/128GB Xanh",
            price:"5490000đ",
            discount:"13",
            chip:"Qualcomm Snapdragon 680 ",
            sizeScreen:"6.58",
            ram:"6",
            rom:"128"
        },
        {
            img:"https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/821/10053177-dien-thoai-nokia-8210-4g-trang-1.jpg",
            name:"Nokia 8210 4G Trắng",
            price:"1.490.000đ",
            discount:"12",
            chip:"Unisoc T107 (22 nm)",
            sizeScreen:"8.2",
            ram:"1",
            rom:"1"
        },
        {
            img:"https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/856/10054597-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-do-1.jpg",
            name:"Samsung Galaxy A14 5G 4GB/128GB Đỏ",
            price:"3990000đ",
            discount:"23",
            chip:"Mediatek MT6833 Dimensity 700 (7 nm)",
            sizeScreen:"6",
            ram:"4",
            rom:"16"
        }
    ]

    let productForU=[
        {
            img:"https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/856/10054629-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-bac-1.jpg",
            name:"Samsung Galaxy A14 5G 4GB/128GB Bạc",
            price:"3.990.000đ",
            discount:"23",
        },
        {
            img:"https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/821/10053177-dien-thoai-nokia-8210-4g-trang-1.jpg",
            name:"Nokia 8210 4G Trắng",
            price:"1.490.000đ",
            discount:"12",
        },
        {
            img:"https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/856/10054597-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-do-1.jpg",
            name:"Samsung Galaxy A14 5G 4GB/128GB Đỏ",
            price:"3990000đ",
            discount:"23",
        },
        {
            img:"https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/834/10053681-dien-thoai-samsung-galaxy-a04-3gb-32gb-den-1.jpg",
            name:"Samsung Galaxy A04 3GB/32GB Đen",
            price:"2090000đ",
            discount:"20",
        },
        {
            img:"https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/856/10054629-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-bac-1.jpg",
            name:"Samsung Galaxy A14 5G 4GB/128GB Bạc",
            price:"3.990.000đ",
            discount:"23",
        },
    
    ]
    return (
        <div className="container">
            <h4> Top 10 sản phẩn điện thoại được yêu thích</h4>
          <div className="row">
            {allProduct.map((product, index) => (
              <div key={index} className="col-md-3">
                <Product
                  img={product.img}
                  name={product.name}
                  price={product.price}
                  discount={product.discount}
                />
              </div>
            ))}
          </div>
        </div>
      );
    };
export default ProductList