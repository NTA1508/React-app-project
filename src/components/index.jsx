import '../App.css';
import Header from './header';
import Home from './pages/home'
import Footer from './footer';
import Contact from './pages/contact';
import AboutUs from './pages/about';
import Cart from './pages/cart';
import CheckOut from './pages/checkout';
import ProductDetail from './pages/prodcut_details';
import WishList from './pages/wishlist';
import ProductCate from './pages/products_categories/products_category';
import Profile from './pages/profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';
import MyOrder from './pages/myoder';

export default function Index() {
    return <>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/about" element={<AboutUs />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/checkout" element={<CheckOut />}></Route>
                <Route path="/detail" element={<ProductDetail />}></Route>
                <Route path="/wishlist" element={<WishList />}></Route>
                <Route path="/products" element={<ProductCate />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/order" element={<MyOrder />}></Route>
            </Routes>
            <Footer />
        </Router>
    </>
}