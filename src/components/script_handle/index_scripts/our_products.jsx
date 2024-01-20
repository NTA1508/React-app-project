import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OurProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getProducts')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const productsArray = Array.isArray(products) ? products : [];

  const productDivs = [];
  let productChildren = [];
  let count = 0;

  productsArray.forEach((products, index) => {
    if (count === 0) {
      productChildren = [];
    }
    const productItem = (
      <div key={products.id} className="product-item">
        <a href="/detail">
          <div className="product-item__img">
            <img src={products.product_image} alt="product-img" />
            <button className="add-cart" type="button">
              Add To Cart
            </button>
          </div>
          <h4 className="product-name webkit-text">{products.product_name}</h4>
        </a>
        <div className="product-price">
          {products.sale_type === "no" ? (
            <>
              <span id="price-new">${products.price}</span>
            </>
          ) : (
            <>
              <span id="price-new">${products.price - products.price * products.sales / 100}</span>
              <span id="price-old">${products.price}</span>
            </>
          )}


        </div>
        <div className="product-action">
          <i className="bx bx-map-pin" />
          <span>{products.storage_address}</span>
        </div>
        {products.sale_type === "no" ? (
          <>
            <span></span>
          </>
        ) : (
          <>
            <div className="discount">-{products.sales}%</div>
          </>
        )}
        <div className="product-tools">
          <button className="product-tl__button" type="button">
            <i className='bx bx-heart'></i>
          </button>
        </div>
      </div>

    );
    productChildren.push(productItem);

    count++;
    if (count === 8 || index === productsArray.length - 1) {
      const productDiv = (
        <div key={index} className="swiper-slide todays-slide__item">
          {productChildren}
        </div>
      );
      productDivs.push(productDiv);
      count = 0;
    }
  });
  return <div className="swiper-wrapper" id="productList">{productDivs}</div>;
};

export default OurProducts;
