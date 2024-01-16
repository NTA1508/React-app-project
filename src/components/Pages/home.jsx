import React, { useEffect } from 'react';
import Swiper from 'swiper';
export default function Home(){

  var swiper = new Swiper(".slide", {
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
          // Lấy các phần tử span để cập nhật đồng hồ đếm ngược
          const daysElement = document.getElementById("days");
          const hoursElement = document.getElementById("hours");
          const minutesElement = document.getElementById("minutes");
          const secondsElement = document.getElementById("seconds");
      
          // Thiết lập thời gian kết thúc của đồng hồ đếm ngược (ví dụ: 3 ngày, 23 giờ, 19 phút, 56 giây)
          const endTime = new Date();
          endTime.setDate(endTime.getDate() + 3);
          endTime.setHours(endTime.getHours() + 0);
          endTime.setMinutes(endTime.getMinutes() + 0);
          endTime.setSeconds(endTime.getSeconds() + 0);
      
          // Cập nhật đồng hồ đếm ngược mỗi giây
          const countdownInterval = setInterval(updateCountdown, 1000);
      
          function updateCountdown() {
              const currentTime = new Date();
              const timeRemaining = endTime - currentTime;
      
              if (timeRemaining <= 0) {
                  // Đồng hồ đếm ngược đã kết thúc
                  clearInterval(countdownInterval);
                  daysElement.textContent = "00";
                  hoursElement.textContent = "00";
                  minutesElement.textContent = "00";
                  secondsElement.textContent = "00";
              } else {
                  // Tính số ngày, giờ, phút và giây còn lại
                  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                  const seconds = Math.floor((timeRemaining % (1000 * 60) / 1000));
      
                  // Cập nhật các thẻ <span> trong mã HTML
                  daysElement.textContent = days.toString().padStart(2, "0");
                  hoursElement.textContent = hours.toString().padStart(2, "0");
                  minutesElement.textContent = minutes.toString().padStart(2, "0");
                  secondsElement.textContent = seconds.toString().padStart(2, "0");
              }
          }
    return<>
    {/* main */}
    <div className="container">
      <div className="wrapper">
        {/* hero */}
        <section className="section hero">
          {/* category */}
          <div className="category">
            <div className="category-item">
              <div className="menu-title">
                <a href="#">
                  <p>Woman's Fashion</p>
                </a>
              </div>
            </div>
            <div className="category-item">
              <div className="menu-title">
                <a href="#">
                  <p>Men's Fashion</p>
                </a>
              </div>
            </div>
            <div className="category-item">
              <div className="menu-title">
                <a href="#">
                  <p>Electronics</p>
                </a>
              </div>
            </div>
            <div className="category-item">
              <div className="menu-title">
                <a href="#">
                  <p>Home &amp; Lifestyle</p>
                </a>
              </div>
            </div>
            <div className="category-item">
              <div className="menu-title">
                <a href="#">
                  <p>Medicine</p>
                </a>
              </div>
            </div>
            <div className="category-item">
              <div className="menu-title">
                <a href="#">
                  <p>Sports &amp; Outdoor</p>
                </a>
              </div>
            </div>
            <div className="category-item">
              <div className="menu-title">
                <a href="#">
                  <p>Baby's &amp; Toys</p>
                </a>
              </div>
            </div>
            <div className="category-item">
              <div className="menu-title">
                <a href="#">
                  <p>Groceries &amp; Pets</p>
                </a>
              </div>
            </div>
            <div className="category-item">
              <div className="menu-title">
                <a href="#">
                  <p>Health &amp; Beauty</p>
                </a>
              </div>
            </div>
          </div>
          {/* slide */}
          <div className="swiper slide">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="#">
                  <img src="./assets/images/slide-1.png" alt="slide" />
                </a>
              </div>
              <div className="swiper-slide">
                <a href="#">
                  <img src="./assets/images/slide-1.png" alt="slide" />
                </a>
              </div>
              <div className="swiper-slide">
                <a href="#">
                  <img src="./assets/images/slide-1.png" alt="slide" />
                </a>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </section>
        {/* todays */}
        <section className="section todays">
          <div className="section-title">Today's</div>
          <div className="swiper todays-slide">
            <div className="todays-title">
              <h1>Flash Sales</h1>
              <div className="todays-time">
                <div className="todays-time__item">
                  <h4>Days</h4>
                  <span id="days">03</span>
                </div>
                <p>:</p>
                <div className="todays-time__item">
                  <h4>Hours</h4>
                  <span id="hours">23</span>
                </div>
                <p>:</p>
                <div className="todays-time__item">
                  <h4>minutes</h4>
                  <span id="minutes">19</span>
                </div>
                <p>:</p>
                <div className="todays-time__item">
                  <h4>Seconds</h4>
                  <span id="seconds">56</span>
                </div>
              </div>
            </div>
            <div id="todaysList" className="swiper-wrapper">
              {/* in ra data product.js */}
            </div>
            <div className="todays-action">
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
          </div>
          <div className="section-button">
            <button>View All Products</button>
          </div>
        </section>
        {/* month */}
        <section className="section month">
          <div className="section-title">This Month</div>
          <div className="todays-title month-title">
            <h1>Best Selling Products</h1>
            <a href="#" className="section-link">
              View All
            </a>
          </div>
          <div className="todays-slide__item" id="month-list">
            {/* in ra data product.js */}
          </div>
        </section>
        {/* banner */}
        <section className="section banner">
          <div className="banner-img">
            <img src="./assets/images/banner.png" alt="banner-img" />
          </div>
          <div className="banner-wrap">
            <h4>Categories</h4>
            <h1>Enhance Your Music Experience</h1>
            <div className="banner-time">
              <div className="banner-item">
                <span id="b-days">03</span>
                <h4>Days</h4>
              </div>
              <div className="banner-item">
                <span id="b-hours">23</span>
                <h4>Hours</h4>
              </div>
              <div className="banner-item">
                <span id="b-minutes">19</span>
                <h4>minutes</h4>
              </div>
              <div className="banner-item">
                <span id="b-seconds">56</span>
                <h4>Seconds</h4>
              </div>
            </div>
            <button className="banner-button">Buy Now!</button>
          </div>
        </section>
        {/* product */}
        <section className="section product">
          <div className="section-title">Our Products</div>
          <div className="swiper todays-slide">
            <div className="todays-title">
              <h1>Explore Our Products</h1>
            </div>
            <div className="swiper-wrapper" id="productList"></div>
            <div className="todays-action">
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
          </div>
          <div className="section-button">
            <button>View All Products</button>
          </div>
        </section>
        {/* featured */}
        <section className="section featured">
          <div className="section-title">Featured</div>
          <div className="todays-title month-title">
            <h1>New Arrival</h1>
          </div>
          <div className="featured-wrap">
            <div className="featured-left">
              <img
                src="./assets/images/featured-1.png"
                alt=""
                className="featured-img"
              />
              <div className="featured-text">
                <h2>PlayStation 5</h2>
                <p>Black and White version of the PS5 coming out on sale.</p>
                <a href="#">Shop Now</a>
              </div>
            </div>
            <div className="featured-right">
              <div className="featured-item">
                <img
                  src="./assets/images/featured-2.png"
                  alt=""
                  className="featured-img"
                />
                <div className="featured-text">
                  <h2>Women's Collections</h2>
                  <p>Featured woman collections that give you another vibe.</p>
                  <a href="#">Shop Now</a>
                </div>
              </div>
              <div className="featured-box">
                <div className="featured-vid">
                  <img
                    src="./assets/images/featured-3.png"
                    alt=""
                    className="featured-img"
                  />
                  <div className="featured-text">
                    <h2>Speakers</h2>
                    <p>Amazon wireless speakers</p>
                    <a href="#">Shop Now</a>
                  </div>
                </div>
                <div className="featured-vid">
                  <img
                    src="./assets/images/featured-4.png"
                    alt=""
                    className="featured-img"
                  />
                  <div className="featured-text">
                    <h2>Perfume</h2>
                    <p>GUCCI INTENSE OUD EDP</p>
                    <a href="#">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* advantage */}
        <section className="section advantage">
          <div className="advantage-list">
            <div className="advantage-item">
              <div className="advantage-logo">
                <img src="./assets/images/icon-delivery.png" alt="" />
              </div>
              <h3>FREE AND FAST DELIVERY</h3>
              <p>Free delivery for all orders over $140</p>
            </div>
            <div className="advantage-item">
              <div className="advantage-logo">
                <img src="./assets/images/Icon-customer_service.png" alt="" />
              </div>
              <h3>24/7 CUSTOMER SERVICE</h3>
              <p>Friendly 24/7 customer support</p>
            </div>
            <div className="advantage-item">
              <div className="advantage-logo">
                <img src="./assets/images/Icon-secure.png" alt="" />
              </div>
              <h3>MONEY BACK GUARANTEE</h3>
              <p>We reurn money within 30 days</p>
            </div>
          </div>
        </section>
      </div>
    </div>
    {/* end */}
    {/* md-image */}
    <div className="md-image">
      <div className="image-wrap">
        <div className="image-title">
          <h3>Lorem ipsum dolor sit amet.</h3>
          <i className="bx bx-x close-image" />
        </div>
        <img src="./assets/images/product-2a.png" alt="image" />
      </div>
    </div>
    {/* end */}
  </> 
}