import React, { useEffect, useState } from 'react';
import product from '../../data/data';

const ProductList = () => {
    useEffect(() => {
      const renderProducts = () => {
        const monthList = document.getElementById('month-list');
        let localCount = 0;
  
        // Loop through the product array
        product.forEach((item) => {
          if (localCount === 2) {
            // If already rendered 4 products, stop the loop
            return;
          }
  
          // Create a div element to contain product information
          const monthDiv = document.createElement('div');
          monthDiv.className = 'product-item';
  
          // Set inner HTML for the product
          monthDiv.innerHTML = `
            <a href="#">
              <div class="product-item__img">
                <img src="./assets/images/${item.images.imageOne}" alt="product-img" />
                <button class="add-cart" type="button">Add To Cart</button>
              </div>
              <h4 class="product-name webkit-text">${item.name}</h4>
            </a>
            <div class="product-price">
              <span id="price-new">$${item.priceNew}</span>
              <span id="price-old">$${item.priceOld}</span>
            </div>
            <div class="product-action">
              <i class='bx bx-map-pin'></i>
              <span>${item.address}</span>
            </div>
            <div class="discount">-40%</div>
            <div class="product-tools">
              <button class="product-tl__button" type="button">
                <i class='bx bx-heart'></i>
              </button>
              <button class="product-tl__button product-button__eye" type="button">
                <i class="bi bi-eye"></i>
              </button>
            </div>
          `;
  
          // Append the product to the month list
          monthList.appendChild(monthDiv);
          localCount += 1;
        });
      };
  
      // Call the renderProducts function
      renderProducts();
    }, []);
  
    return <div className="todays-slide__item" id="month-list"></div>;
  };
  
  export default ProductList;
