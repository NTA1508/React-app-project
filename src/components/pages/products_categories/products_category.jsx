import PaginationComponent from "../../script_handle/index_scripts/whishlist_pagechange"
export default function ProductCate() {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="category">
                    <div className="category-item">
                        <div className="menu-title">
                            <a href="/products">
                                <p>Mobile phones</p>
                            </a>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="menu-title">
                            <a href="/products">
                                <p>Laptops and Tablets</p>
                            </a>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="menu-title">
                            <a href="/products">
                                <p>Televisions and Monitors</p>
                            </a>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="menu-title">
                            <a href="/products">
                                <p>Audio and Headphones</p>
                            </a>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="menu-title">
                            <a href="/products">
                                <p>Cameras and Camcorders</p>
                            </a>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="menu-title">
                            <a href="/products">
                                <p>Game consoles</p>
                            </a>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="menu-title">
                            <a href="/products">
                                <p>Printers and Scanners</p>
                            </a>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="menu-title">
                            <a href="/products">
                                <p>Smart home appliances</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="wishlist-nav">
                    <div className="contact-title">
                        <div className="contact-fix">
                            <a href="/home">Home</a>
                            &nbsp;/&nbsp;
                            <p>Mobile phones</p>
                        </div>
                    </div>
                    <div className="wishlist-wrap">
                        <div className="wishlist-list">
                            <div className="product-item">
                                <a href="/detail">
                                    <div className="product-item__img">
                                        <img src="./assets/images/product-1a.png" alt="product-img" />
                                        <button className="add-cart" type="button">
                                            Add To Cart
                                        </button>
                                    </div>
                                    <h4 className="product-name webkit-text">HAVIT HV-G92 Gamepad</h4>
                                </a>
                                <div className="product-price">
                                    <span id="price-new">$120</span>
                                    <span id="price-old">$160</span>
                                </div>
                                <div className="product-action">
                                    <i className="bx bx-map-pin" />
                                    <span>Hà Nội</span>
                                </div>
                                <div className="discount">-28%</div>
                                <div className="product-tools">
                                    <button className="product-tl__button" type="button">
                                        <i className="bx bx-heart" />
                                    </button>
                                    <button
                                        className="product-tl__button product-button__eye"
                                        type="button"
                                    >
                                        <a href='/detail' style={{color:"black"}}><i className="bi bi-eye"></i></a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* pagination - phân trang */}
                        <PaginationComponent />
                    </div>
                </div>
            </div>
        </div>

    )
}