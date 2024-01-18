import React, { useEffect } from 'react';
import 'swiper/css';

const ProfileSlide = () => {
    useEffect(() => {
        // Dynamically create a script element
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
        script.async = true;

        // Append the script to the document head
        document.head.appendChild(script);

        // Event listener for script load to ensure Swiper is available before initializing
        script.addEventListener('load', async () => {
            await new Promise((resolve) => setTimeout(resolve, 0));
            // Initialize the Swiper instance
            const swiper = new window.Swiper(".story-slide", {
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
            });

            // Clean up Swiper instance on component unmount
            return () => {
                swiper.destroy();
            };
        });

        // Remove the script from the document on component unmount
        return () => {
            document.head.removeChild(script);
        };
    }, []); // Run the effect only once on mount

    return (
        <section className="swiper story-slide">
            <div className="swiper-wrapper">
                <div className="swiper-slide story-slide__item">
                    <div className="story-slide__box">
                        <div className="story-slide__img">
                            <img src="./assets/images/user-1.png" alt="img" />
                        </div>
                        <h2>Tom Cruise</h2>
                        <p>Founder &amp; Chairman</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="story-slide__box">
                        <div className="story-slide__img">
                            <img src="./assets/images/user-1.png" alt="img" />
                        </div>
                        <h2>Tom Cruise</h2>
                        <p>Founder &amp; Chairman</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="story-slide__box">
                        <div className="story-slide__img">
                            <img src="./assets/images/user-1.png" alt="img" />
                        </div>
                        <h2>Tom Cruise</h2>
                        <p>Founder &amp; Chairman</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="swiper-slide story-slide__item">
                    <div className="story-slide__box">
                        <div className="story-slide__img">
                            <img src="./assets/images/user-1.png" alt="img" />
                        </div>
                        <h2>Tom Cruise</h2>
                        <p>Founder &amp; Chairman</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="story-slide__box">
                        <div className="story-slide__img">
                            <img src="./assets/images/user-1.png" alt="img" />
                        </div>
                        <h2>Tom Cruise</h2>
                        <p>Founder &amp; Chairman</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="story-slide__box">
                        <div className="story-slide__img">
                            <img src="./assets/images/user-1.png" alt="img" />
                        </div>
                        <h2>Tom Cruise</h2>
                        <p>Founder &amp; Chairman</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="swiper-slide story-slide__item">
                    <div className="story-slide__box">
                        <div className="story-slide__img">
                            <img src="./assets/images/user-1.png" alt="img" />
                        </div>
                        <h2>Tom Cruise</h2>
                        <p>Founder &amp; Chairman</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="story-slide__box">
                        <div className="story-slide__img">
                            <img src="./assets/images/user-1.png" alt="img" />
                        </div>
                        <h2>Tom Cruise</h2>
                        <p>Founder &amp; Chairman</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="story-slide__box">
                        <div className="story-slide__img">
                            <img src="./assets/images/user-1.png" alt="img" />
                        </div>
                        <h2>Tom Cruise</h2>
                        <p>Founder &amp; Chairman</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="swiper-pagination" />
        </section>
    );
};

export default ProfileSlide;

