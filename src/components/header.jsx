import React, { useState, useEffect, useRef } from "react";
export default function Header() {
    const [isMdAccountVisible, setIsMdAccountVisible] = useState(false);
    const accountButtonRef = useRef(null);
    const mdAccountRef = useRef(null);

    useEffect(() => {
        const handleDocumentClick = (event) => {
            if (
                accountButtonRef.current &&
                mdAccountRef.current &&
                !accountButtonRef.current.contains(event.target) &&
                !mdAccountRef.current.contains(event.target)
            ) {
                // If the click is outside #account and #md-account, hide #md-account
                setIsMdAccountVisible(false);
            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const handleAccountButtonClick = (event) => {
        // Prevent the click event from bubbling up to parent elements
        event.stopPropagation();

        // Toggle the visibility of #md-account
        setIsMdAccountVisible((prev) => !prev);
    };
    return (
        <>
            <header>
                <div className="hunter">
                    <p>
                        <span>
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        </span>
                        <a href="#">ShopNow</a>
                    </p>
                    <div className="language">
                        <span>Vietnamese</span>
                        <i className="bx bx-chevron-down" />
                        <nav className="language-list">
                            <div className="language-item">English</div>
                            <div className="language-item">China</div>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <div className="navbar">
                        <a href="./index.html" className="logo">
                            Exclusive
                        </a>
                        <div className="sidebar">
                            <a className="sidebar-item" href="/pages/home">
                                Home
                            </a>
                            <a className="sidebar-item" href="/pages/contact">
                                Contact
                            </a>
                            <a className="sidebar-item" href="./about.html">
                                About
                            </a>
                            <a className="sidebar-item" href="./login.html">
                                Login
                            </a>
                        </div>
                        <div className="tools-list">
                            <div className="search-nav">
                                <input className="search-input" type="text" placeholder="Search..." />
                                <i className="bx bx-search icon-search" />
                                {/* search-result */}
                                <div className="search-result">
                                    <div className="search-title">
                                        Search Results: &nbsp;<span>4</span>&nbsp;Results
                                    </div>
                                    <div className="search-list">
                                        {/* <a href="#">
                              <div class="search-item">
                                  <i class='bx bx-search icon-search'></i>
                                  <span>HAVIT HV-G92 Gamepad</span>
                              </div>
                          </a> */}
                                        {/* message */}
                                        <div className="message">No results were found!</div>
                                    </div>
                                </div>
                            </div>
                            <a href="./wishlist.html">
                                <div className="tools-item">
                                    <i className="bx bx-heart" />
                                    <span className="number-icon" id="heart-number">
                                        2
                                    </span>
                                </div>
                            </a>
                            <a href="./cart.html">
                                <div className="tools-item">
                                    <i className="bx bx-cart-alt" />
                                    <span className="number-icon" id="cart-number">
                                        5
                                    </span>
                                </div>
                            </a>
                            <div
                                class="tools-item account"
                                id="account" onClick={handleAccountButtonClick} ref={accountButtonRef}
                            >
                                <i className="bx bx-user" />
                                <div className="md-account" id="md-account"
                                    style={{ display: isMdAccountVisible ? 'block' : 'none' }}
                                    ref={mdAccountRef}>
                                    <a href="#">
                                        <i className="bx bx-user" />
                                        <span>Manage My Account</span>
                                    </a>
                                    <a href="#">
                                        <i className="bx bxs-shopping-bags" />
                                        <span>My Order</span>
                                    </a>
                                    <a href="#">
                                        <i className="bx bx-log-out" />
                                        <span>Logout</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
