import React, { useEffect } from 'react';
import 'swiper/css';

const HeroSlide = () => {
    useEffect(() => {
      // Dynamically create a script element
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
      script.async = true;
  
      // Append the script to the document head
      document.head.appendChild(script);
  
      // Event listener for script load to ensure Swiper is available before initializing
      script.addEventListener('load', async  () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
        // Initialize the Swiper instance
        const swiper = new window.Swiper(".slide", {
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            autoplay: {
              delay: 3500,
              disableOnInteraction: false,
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
      <div className="swiper slide">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <a href="#">
              <img src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg" alt="slide" />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#">
              <img src="https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/1-1671683430721237949162.jpg" alt="slide" />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#">
              <img src="https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/2-16716834307051333204158.jpg" alt="slide" />
            </a>
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
    );
  };
  
  export default HeroSlide;

  