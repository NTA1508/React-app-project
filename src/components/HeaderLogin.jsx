import React from 'react'

function HeaderLogin() {
    return (
        <header>
            <div className="hunter">
                <p>
                    <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                    <a href="#">ShopNow</a>
                </p>
                <div className="language">
                    <span>Vietnamese</span>
                    <i className='bx bx-chevron-down'></i>
                    <nav className="language-list">
                        <div className="language-item">English</div>
                        <div className="language-item">China</div>
                    </nav>
                </div>
            </div>

            <div className="container">
                <div className="navbar">
                    <a href="./index.html" className="logo">Exclusive</a>
                    <div className="sidebar">
                        <a className="sidebar-item" href="./index.html">Home</a>
                        <a className="sidebar-item" href="./contact.html">Contact</a>
                        <a className="sidebar-item" href="./about.html">About</a>
                        <a className="sidebar-item" href="./register.html">Sign Up</a>
                    </div>
                    <div className="tools-list">
                        <div className="search-nav">
                            <input className="search-input" type="text" placeholder="Search..." />
                            <i className='bx bx-search icon-search'></i>

                            <div className="search-list">
                                {/* <a href="#">
                <div className="search-item">
                  <i className='bx bx-search icon-search'></i>
                  <span>HAVIT HV-G92 Gamepad</span>
                </div>
              </a> */}

                                {/* Message */}
                                <div className="message">No results were found!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderLogin