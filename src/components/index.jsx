import '../App.css';
import Header from './header';
import Home from './pages/home'
import Footer from './footer';
import Contact from './pages/contact';
import AboutUs from './pages/about';
import Cart from './pages/cart';
import CheckOut from './pages/checkout';
import ProductDetail from './pages/prodcut_detals';
import WishList from './pages/wishlist';
import Phones from './pages/products_categories/phones';

export default function Index(){
    return<>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <Header/>
        <Home/>   
        {/* <Contact/> */}
        {/* <AboutUs/> */}
        {/* <Cart/> */}
        {/* <CheckOut/> */}
        {/* <ProductDetail/> */}
        {/* <WishList/> */}
        {/* <Phones/> */}
        <Footer/>   
    </>
}