import { useState } from "react";
export default function Header() {
    var page_active = ""
    const [activeItem, setActiveItem] = useState(page_active);

    const handleSidebarItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <>
            <div class="hunter">
                <p>
                    <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                    <a href="#">ShopNow</a>
                </p>
            </div>

            <div class="container">
                <div class="navbar">
                    <a href="./index.html" class="logo">Exclusive</a>
                    <div class="sidebar">
                        <a
                            className={`sidebar-item ${activeItem === "Home" ? 'active' : ''}`}
                            href="./index.html"
                            onClick={() => handleSidebarItemClick("Home")}
                        >
                            Home
                        </a>
                        <a
                            className={`sidebar-item ${activeItem === "Contact" ? 'active' : ''}`}
                            href="./contact.html"
                            onClick={() => handleSidebarItemClick("Contact")}
                        >
                            Contact
                        </a>
                        <a
                            className={`sidebar-item ${activeItem === "About" ? 'active' : ''}`}
                            href="./about.html"
                            onClick={() => handleSidebarItemClick("About")}
                        >
                            About
                        </a>
                        <a
                            className={`sidebar-item ${activeItem === "SignUp" ? 'active' : ''}`}
                            href="./register.html"
                            onClick={() => handleSidebarItemClick("SignUp")}
                        >
                            Sign Up
                        </a>
                    </div>
                    <div class="tools-list">
                        <div class="search-nav">
                            <input class="search-input" type="text" placeholder="Search..." />
                            <i class='bx bx-search icon-search'></i>

                            <div class="search-list">
                                {/* <a href="#">
                                    <div class="search-item">
                                        <i class='bx bx-search icon-search'></i>
                                        <span>HAVIT HV-G92 Gamepad</span>
                                    </div>
                                </a> */}
                                {/* <div class="message">No results were found!</div> */}
                            </div>
                        </div>
                        <a href="./wishlist.html">
                            <div class="tools-item">
                                <i class='bx bx-heart'></i>
                                <span class="number-icon" id="heart-number">2</span>
                            </div>
                        </a>
                        <a href="./cart.html">
                            <div class="tools-item">
                                <i class='bx bx-cart-alt'></i>
                                <span class="number-icon" id="cart-number">5</span>
                            </div>
                        </a>
                        <div class="tools-item account" id="account">
                            <i class='bx bx-user'></i>
                            <div class="md-account" id="md-account">
                                <a href="#">
                                    <i class='bx bx-user'></i>
                                    <span>Manage My Account</span>
                                </a>
                                <a href="#">
                                    <i class='bx bxs-shopping-bags'></i>
                                    <span>My Order</span>
                                </a>
                                <a href="#">
                                    <i class='bx bx-log-out'></i>
                                    <span>Logout</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
