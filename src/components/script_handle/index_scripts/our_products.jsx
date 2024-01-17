import React from 'react';
import product from '../../data/data';

const OurProducts = () => {
  const productsArray = Array.isArray(product) ? product : [];

  const productDivs = [];
  let productChildren = [];
  let count = 0;

  productsArray.forEach((item, index) => {
    // If count reaches 0, create a new .swiper-slide.todays-slide__item
    if (count === 0) {
      productChildren = [];
    }

    // Create a div to hold product information
    const productItem = (
      <div key={item.id} className="product-item">
        <a href="#">
          <div className="product-item__img">
            <img src={`${item.images.imageOne}`} alt="product-img" />
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
            <i className="bi bi-eye"></i>
          </button>
        </div>
      </div>
      
    );

    // Add the product to the current .swiper-slide.todays-slide__item
    productChildren.push(productItem);

    count++;
    // If count reaches 4 or it's the last product, add the .swiper-slide.todays-slide__item to the page
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

  // Render the productDivs in the component
  return <div className="swiper-wrapper" id="productList">{productDivs}</div>;
};

export default OurProducts;