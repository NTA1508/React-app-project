import React, { useEffect } from 'react';
import 'swiper/css';

const HeroSlide = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
      script.async = true;
  
      document.head.appendChild(script);

      script.addEventListener('load', async  () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
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
  
        return () => {
          swiper.destroy();
        };
      });
      return () => {
        document.head.removeChild(script);
      };
    }, []);  
    return (
      <div className="swiper slide">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <a href="#">
              <img src="https://res.cloudinary.com/khoa123/image/upload/v1705568808/fwei1ckvlrzn4srmfvlp.png" alt="slide" />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#">
              <img src="https://res.cloudinary.com/khoa123/image/upload/v1705568808/fwei1ckvlrzn4srmfvlp.png" alt="slide" />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#">
              <img src="https://res.cloudinary.com/khoa123/image/upload/v1705568808/fwei1ckvlrzn4srmfvlp.png" alt="slide" />
            </a>
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
    );
  };
  
  export default HeroSlide;

  