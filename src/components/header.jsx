import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
    const [isMdAccountVisible, setIsMdAccountVisible] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState(null);
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
                setIsMdAccountVisible(false);
            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const handleAccountButtonClick = (event) => {
        event.stopPropagation();
        setIsMdAccountVisible((prev) => !prev);
    };

    const handleNavItemClick = (navItem) => {
        setActiveNavItem(navItem);
    };
    return (
        <>
            <header>
                <div className="hunter">
                    <p>
                        <span>
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        </span>
                        <a href="/home">ShopNow</a>
                    </p>
                </div>
                <div className="container">
                    <div className="navbar">
                        <a href="./index.html" className="logo">
                            Exclusive
                        </a>
                        <div className="sidebar">
                            <NavLink
                                to="/home"
                                className={`sidebar-item ${activeNavItem === 'home' ? 'active' : ''}`}
                                onClick={() => handleNavItemClick('home')}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={`sidebar-item ${activeNavItem === 'contact' ? 'active' : ''}`}
                                onClick={() => handleNavItemClick('contact')}
                            >
                                Contact
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={`sidebar-item ${activeNavItem === 'about' ? 'active' : ''}`}
                                onClick={() => handleNavItemClick('about')}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/login"
                                className={`sidebar-item ${activeNavItem === 'login' ? 'active' : ''}`}
                                onClick={() => handleNavItemClick('login')}
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/admin"
                                className={`sidebar-item ${activeNavItem === 'admin' ? 'active' : ''}`}
                                onClick={() => handleNavItemClick('admin')}
                            >
                                Admin
                            </NavLink>
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
                            <a href="/wishlist">
                                <div className="tools-item">
                                    <i className="bx bx-heart" />
                                    <span className="number-icon" id="heart-number">
                                        2
                                    </span>
                                </div>
                            </a>
                            <a href="/cart">
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
                                    <a href="/profile">
                                        <i className="bx bx-user" />
                                        <span>Manage My Account</span>
                                    </a>
                                    <a href="/order">
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
