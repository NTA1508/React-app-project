import React, { useEffect, useState } from 'react';
import product from '../../data/data';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      const limitedProducts = product.slice(0, 4);
      setProducts(limitedProducts);
    };

    fetchProducts();
  }, []);

  const renderProducts = () => {
    const productDivs = [];
    let productChildren = [];
    let count = 0;

    products.forEach((item, index) => {
      if (count === 0) {
        productChildren = [];
      }

      const productItem = (
        <div key={item.id} className="product-item">
          <a href="/detail">
            <div className="product-item__img">
              <img src={`./assets/images/${item.images.imageOne}`} alt="product-img" />
              <button className="add-cart" type="button">
                Add To Cart
              </button>
            </div>
            <h4 className="product-name webkit-text">{item.name}</h4>
          </a>
          <div className="product-price">
            <span id="price-new">${item.priceNew}</span>
            <span id="price-old">${item.priceOld}</span>
          </div>
          <div className="product-action">
            <i className='bx bx-map-pin'></i>
            <span>{item.address}</span>
          </div>
          <div className="discount">{item.discountSale}</div>
          <div className="product-tools">
            <button className="product-tl__button" type="button">
              <i className='bx bx-heart'></i>
            </button>
            <button className="product-tl__button product-button__eye" type="button">
              <a href='/detail' style={{color:"black"}}><i className="bi bi-eye"></i></a>
            </button>
          </div>
        </div>
      );

      productChildren.push(productItem);

      count++;
      if (count === 4 || index === products.length - 1) {
        const productDiv = (
          <div key={index} className="swiper-slide todays-slide__item">
            {productChildren}
          </div>
        );
        productDivs.push(productDiv);
        count = 0;
      }
    });

    return productDivs;
  };

  return <div id="todaysList" className="swiper-wrapper">{renderProducts()}</div>;
};

export default ProductList;
