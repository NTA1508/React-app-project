import React, { Component, useEffect, useState } from 'react';
import CountdownTimer from '../script_handle/index_scripts/countdowntimer';
// import CountdownBannerTimer from '../script_handle/index_scripts/banner_time';
// import TodaysProducts from '../script_handle/index_scripts/get_products';
import ToDaySlide from '../script_handle/index_scripts/today_slide';
import HeroSlide from '../script_handle/index_scripts/hero_slide';
import MonthList from '../script_handle/index_scripts/get_month';
import OurProducts from '../script_handle/index_scripts/our_products';
class Home extends Component {
  render() {
    return (
      <>
        <div class="container">
          <div className="wrapper">
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
              <HeroSlide />
            </section>
            {/* todays */}
            <ToDaySlide />
            {/* month */}
            <section className="section month">
              <div className="section-title">This Month</div>
              <div className="todays-title month-title">
                <h1>Best Selling Products</h1>
                <a href="#" className="section-link">
                  View All
                </a>
              </div>
              <MonthList />
            </section>
            {/* banner */}
            <CountdownTimer />
            {/* product */}
            <section className="section product">
              <div className="section-title">Our Products</div>
              <div className="swiper todays-slide">
                <div className="todays-title">
                  <h1>Explore Our Products</h1>
                </div>
                <OurProducts />
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
    );
  }
}

export default Home;
