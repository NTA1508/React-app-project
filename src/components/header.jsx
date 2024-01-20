import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';

export default function Header() {
    const [isMdAccountVisible, setIsMdAccountVisible] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState(null);
    const accountButtonRef = useRef(null);
    const mdAccountRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [products, setProducts] = useState([]);

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

    useEffect(() => {
        axios.get('http://localhost:3001/getProducts')
            .then(response => setProducts(response.data))
            .catch(err => console.log(err))
    }, []);

    const handleAccountButtonClick = (event) => {
        event.stopPropagation();
        setIsMdAccountVisible((prev) => !prev);
    };

    const handleNavItemClick = (navItem) => {
        setActiveNavItem(navItem);
    };
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        // Filter products based on the search query
        const filteredProducts = products.filter(product =>
            product.product_name.toLowerCase().startsWith(searchQuery.toLowerCase())
        );

        setSearchResults(filteredProducts);
    }, [searchQuery, products]);
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
                        <a href="/home" className="logo">
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
                                <input
                                    className="search-input"
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={handleSearchInputChange}
                                />
                                <i className="bx bx-search icon-search" />
                                {searchQuery && (
                                    <div className="search-result">
                                        {searchResults.length > 0 ? (
                                            <>
                                                <div className="search-title">
                                                    Search Results: &nbsp;<span>{searchResults.length}</span>&nbsp;Results
                                                </div>
                                                <div className="search-list">
                                                    {searchResults.map(result => (
                                                        <a href={`/detail/${result._id}`} key={result.id}>
                                                            <div className="search-item">
                                                                <i className='bx bx-search icon-search'></i>
                                                                <span>{result.product_name}</span>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="search-title">
                                                    Search Results: &nbsp;<span>0</span>&nbsp;Results
                                                </div>
                                                <div className="search-list">
                                                    <div className="search-item">
                                                        <i className='bx bx-search icon-search'></i>
                                                        <span>No results for {searchQuery}</span>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                            <a href="/wishlist">
                                <div className="tools-item">
                                    <i className="bx bx-heart" />
                                    <span className="number-icon" id="heart-number">
                                        0
                                    </span>
                                </div>
                            </a>
                            <a href="/cart">
                                <div className="tools-item">
                                    <i className="bx bx-cart-alt" />
                                    <span className="number-icon" id="cart-number">
                                        0
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
