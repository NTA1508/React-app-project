import React, { useEffect } from 'react';
import 'swiper/css';
import TodaysProducts from './get_products';
import CountdownBannerTimer from './banner_time';

const ToDaySlide = () => {
  useEffect(() => {
    // Dynamically create a script element
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    script.async = true;

    // Append the script to the document head
    document.head.appendChild(script);

    // Event listener for script load to ensure Swiper is available before initializing
    script.addEventListener('load', () => {
      const swiper = new window.Swiper(".todays-slide", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      // Clean up Swiper instance on component unmount
      return () => {
        swiper.destroy();
      };
    });

    // Remove the script from the document on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Run the effect only once on mount

  return (
    <section className="section todays">
      <div className="section-title">Today's</div>
      <div className="swiper todays-slide">
        <CountdownBannerTimer />
        <TodaysProducts />
        <div className="todays-action">
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
      <div className="section-button">
        <button>View All Products</button>
      </div>
    </section>
  );
};

export default ToDaySlide;