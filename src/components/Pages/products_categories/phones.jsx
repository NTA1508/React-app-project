import PaginationComponent from "../../script_handle/index_scripts/whishlist_pagechange"
export default function Phones() {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="wishlist-nav">
                    <div className="contact-title">
                        <div className="contact-fix">
                            <a href="./index.html">Home</a>
                            &nbsp;/&nbsp;
                            <p>Woman's Fashion</p>
                        </div>
                    </div>
                    <div className="wishlist-wrap">
                        <div className="wishlist-list">
                            <div className="product-item">
                                <a href="#">
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
                                        <i className="bi bi-eye" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* pagination - phân trang */}
                        <PaginationComponent/>
                    </div>
                </div>
            </div>
        </div>

    )
}