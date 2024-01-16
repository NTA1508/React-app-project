export default function Home(){
    return<>
    <div class="container">
    <div class="wrapper">
        {/* <!-- hero --> */}
        <section class="section hero">
            {/* <!-- category --> */}
            <div class="category">
                <div class="category-item">
                    <div class="menu-title">
                        <a href="#"><p>Woman's Fashion</p></a>
                    </div>
                </div>
                <div class="category-item">
                    <div class="menu-title">
                        <a href="#"><p>Men's Fashion</p></a>
                    </div>
                </div>
                <div class="category-item">
                    <div class="menu-title">
                        <a href="#"><p>Electronics</p></a>
                    </div>
                </div>
                <div class="category-item">
                    <div class="menu-title">
                        <a href="#"><p>Home & Lifestyle</p></a>
                    </div>
                </div>
                <div class="category-item">
                    <div class="menu-title">
                        <a href="#"><p>Medicine</p></a>
                    </div>
                </div>
                <div class="category-item">
                    <div class="menu-title">
                        <a href="#"><p>Sports & Outdoor</p></a>
                    </div>
                </div>
                <div class="category-item">
                    <div class="menu-title">
                        <a href="#"><p>Baby's & Toys</p></a>
                    </div>
                </div>
                <div class="category-item">
                    <div class="menu-title">
                        <a href="#"><p>Groceries & Pets</p></a>
                    </div>
                </div>
                <div class="category-item">
                    <div class="menu-title">
                        <a href="#"><p>Health & Beauty</p></a>
                    </div>
                </div>
            </div>

            {/* <!-- slide --> */}
            <div class="swiper slide">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="#">
                            <img src="" alt="slide"/>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#">
                            <img src="./assets/images/slide-1.png" alt="slide"/>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#">
                            <img src="./assets/images/slide-1.png" alt="slide"/>
                        </a>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </section>

        {/* <!-- todays --> */}
        <section class="section todays">
            <div class="section-title">Today</div>
            <div class="swiper todays-slide">
                <div class="todays-title">
                    <h1>Flash Sales</h1>
                    <div class="todays-time">
                        <div class="todays-time__item">
                            <h4>Days</h4><span id="days">03</span>
                        </div>
                        <p>:</p>
                        <div class="todays-time__item">
                            <h4>Hours</h4><span id="hours">23</span>
                        </div>
                        <p>:</p>
                        <div class="todays-time__item">
                            <h4>minutes</h4><span id="minutes">19</span>
                        </div>
                        <p>:</p>
                        <div class="todays-time__item">
                            <h4>Seconds</h4><span id="seconds">56</span>
                        </div>
                    </div>
                </div>
                <div id="todaysList" class="swiper-wrapper">
                    {/* <!-- in ra data product.js --> */}
                </div>
                <div class="todays-action">
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
            <div class="section-button">
                <button>View All Products</button>
            </div>
        </section>

        {/* <!-- month --> */}
        <section class="section month">
            <div class="section-title">This Month</div>
            <div class="todays-title month-title">
                <h1>Best Selling Products</h1>
                <a href="#" class="section-link">View All</a>
            </div>
            <div class="todays-slide__item" id="month-list">
                {/* <!-- in ra data product.js --> */}
            </div>
        </section>

        {/* <!-- banner --> */}
        <section class="section banner">
            <div class="banner-img">
                <img src="./assets/images/banner.png" alt="banner-img"/>
            </div>
            <div class="banner-wrap">
                <h4>Categories</h4>
                <h1>Enhance Your Music Experience</h1>
                <div class="banner-time">
                    <div class="banner-item">
                        <span id="b-days">03</span><h4>Days</h4>
                    </div>
                    <div class="banner-item">
                        <span id="b-hours">23</span><h4>Hours</h4>
                    </div>
                    <div class="banner-item">
                        <span id="b-minutes">19</span><h4>minutes</h4>
                    </div>
                    <div class="banner-item">
                        <span id="b-seconds">56</span><h4>Seconds</h4>
                    </div>
                </div>
                <button class="banner-button">Buy Now!</button>
            </div>
        </section>

        {/* <!-- product --> */}
        <section class="section product">
            <div class="section-title">Our Products</div>
            <div class="swiper todays-slide">
                <div class="todays-title">
                    <h1>Explore Our Products</h1>
                </div>
                <div class="swiper-wrapper" id="productList">
                    
                </div>
                <div class="todays-action">
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
            <div class="section-button">
                <button>View All Products</button>
            </div>
        </section>

        {/* <!-- featured --> */}
        <section class="section featured">
            <div class="section-title">Featured</div>
            <div class="todays-title month-title">
                <h1>New Arrival</h1>
            </div>
            <div class="featured-wrap">
                <div class="featured-left">
                    <img src="./assets/images/featured-1.png" alt="" class="featured-img"/>
                    <div class="featured-text">
                        <h2>PlayStation 5</h2>
                        <p>Black and White version of the PS5 coming out on sale.</p>
                        <a href="#">Shop Now</a>
                    </div>
                </div>
                <div class="featured-right">
                    <div class="featured-item">
                        <img src="./assets/images/featured-2.png" alt="" class="featured-img"/>
                        <div class="featured-text">
                            <h2>Women's Collections</h2>
                            <p>Featured woman collections that give you another vibe.</p>
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
                    <div class="featured-box">
                        <div class="featured-vid">
                            <img src="./assets/images/featured-3.png" alt="" class="featured-img"/>
                            <div class="featured-text">
                                <h2>Speakers</h2>
                                <p>Amazon wireless speakers</p>
                                <a href="#">Shop Now</a>
                            </div>
                        </div>
                        <div class="featured-vid">
                            <img src="./assets/images/featured-4.png" alt="" class="featured-img"/>
                            <div class="featured-text">
                                <h2>Perfume</h2>
                                <p>GUCCI INTENSE OUD EDP</p>
                                <a href="#">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- advantage --> */}
        <section class="section advantage">
            <div class="advantage-list">
                <div class="advantage-item">
                    <div class="advantage-logo">
                        <img src="./assets/images/icon-delivery.png" alt=""/>
                    </div>
                    <h3>FREE AND FAST DELIVERY</h3>
                    <p>Free delivery for all orders over $140</p>
                </div>
                <div class="advantage-item">
                    <div class="advantage-logo">
                        <img src="./assets/images/Icon-customer_service.png" alt=""/>
                    </div>
                    <h3>24/7 CUSTOMER SERVICE</h3>
                    <p>Friendly 24/7 customer support</p>
                </div>
                <div class="advantage-item">
                    <div class="advantage-logo">
                        <img src="./assets/images/Icon-secure.png" alt=""/>
                    </div>
                    <h3>MONEY BACK GUARANTEE</h3>
                    <p>We reurn money within 30 days</p>
                </div>
            </div>
        </section>
    </div>
</div>
{/* <!-- end --> */}

{/* <!-- md-image --> */}
    <div class="md-image">
        <div class="image-wrap">
            <div class="image-title">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <i class='bx bx-x close-image'></i>
            </div>
            <img src="./assets/images/product-2a.png" alt="image"/>
        </div>
    </div>
{/* <!-- end --> */}

    </>
}