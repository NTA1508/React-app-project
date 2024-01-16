export default function Footer() {
    return (
        <>
            <footer>
                <section class="container footer-top">
                    <div class="footer-top__item">
                        <a href="./index.html" class="logo">Exclusive</a>
                        <p>Get 10% off your first order</p>
                        <div class="footer-submit">
                            <input type="email" placeholder="Enter your email" />
                            <i class='bx bxl-telegram'></i>
                        </div>
                    </div>
                    <div class="footer-top__item">
                        <h3>Support</h3>
                        <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                        <p>exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>
                    <div class="footer-top__item">
                        <h3>Support</h3>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms Of Use</a>
                        <a href="#">FAQ</a>
                        <a href="#">Contact</a>
                    </div>
                    <div class="footer-top__item">
                        <h3>Download App</h3>
                        <img src="./assets/images/frame.png" alt="" />
                        <ul>
                            <li>
                                <a href="#"><i class='bx bxl-facebook-circle'></i></a>
                            </li>
                            <li>
                                <a href="#"><i class='bx bxl-twitter'></i></a>
                            </li>
                            <li>
                                <a href="#"><i class='bx bxl-instagram'></i></a>
                            </li>
                            <li>
                                <a href="#"><i class='bx bxl-linkedin'></i></a>
                            </li>
                        </ul>
                    </div>
                </section>
                <div class="footer-below">&#169; Copyright Rimel 2023. All right reserved</div>
            </footer>
        </>
    );
}
