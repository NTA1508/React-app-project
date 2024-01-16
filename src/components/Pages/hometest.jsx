import React, { Component, useEffect, useState } from 'react';
import CountdownTimer from '../script_handle/index_scripts/countdowntimer';
import CountdownBannerTimer from '../script_handle/index_scripts/banner_time';
import TodaysProducts from '../script_handle/index_scripts/get_products';
class HomeT extends Component {
  render() {
    return (
      <div class="container">
        <div className="wrapper">
          {/* todays */}
          <section className="section todays">
            <div className="section-title">Today's</div>
            <div className="swiper todays-slide">
              <CountdownBannerTimer/>
              <TodaysProducts/>
              <div className="todays-action">
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
              </div>
            </div>
            <div className="section-button">
              <button>View All Products</button>
            </div>
          </section>
          {/* banner */}
          <CountdownTimer/>
        </div>
      </div>
    );
  }
}

export default HomeT;
