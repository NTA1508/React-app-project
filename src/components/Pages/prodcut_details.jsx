import ChangeImage from "../script_handle/index_scripts/product_detail";
import ProductIncrement from "../script_handle/index_scripts/product_increment";

export default function ProductDetail() {
    return (
            <div className="container">
                <div className="wrapper">
                    <div className="wishlist-nav">
                        <div className="contact-title">
                            <div className="contact-fix">
                                <a href="/home">Home</a>
                                &nbsp;/&nbsp;
                                <p>HAVIT HV-G92 Gamepad</p>
                            </div>
                        </div>
                        <div className="product-wrap">
                            <ChangeImage/>
                            <div className="product-content">
                                <h2>HAVIT HV-G92 Gamepad</h2>
                                <nav className="pro-nav-st">
                                    <div className="product-ct-star">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                    </div>
                                    <span>|</span>
                                    <p>in stock: 50</p>
                                </nav>
                                <h1>$120</h1>
                                <p>
                                    PlayStation 5 Controller Skin High quality vinyl with air channel
                                    adhesive for easy bubble free install &amp; mess free removal
                                    Pressure sensitive.
                                </p>
                                <hr />
                                <div className="product-nb">
                                    <nav>
                                        <ProductIncrement/>
                                        <a href="#">
                                            <button className="pro-btn" type="button">
                                                Buy Now
                                            </button>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}