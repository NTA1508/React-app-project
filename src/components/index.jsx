import '../App.css';
import Header from './header';
import Home from './Pages/home'
import Footer from './footer';
import Contact from './Pages/contact';
import AboutUs from './Pages/about';
import Cart from './Pages/cart';
import CheckOut from './Pages/checkout';
import ProductDetail from './Pages/prodcut_details';
import WishList from './Pages/wishlist';
import ProductCate from './Pages/products_categories/products_category';
import Profile from './Pages/profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/login';
import Register from './Pages/register';
import MyOrder from './Pages/myoder';
import Admin from './Pages/admin/admin';
import AllProducts from './Pages/admin/all_products';
import OrdersList from './Pages/admin/orders_list';
import Message from './Pages/admin/message';
import AddProduct from './Pages/admin/add_product';
import EditProduct from './Pages/admin/edit_product'

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
                <Route path="/admin" element={<Admin />}></Route>
                <Route path="/all_products" element={<AllProducts />}></Route>
                <Route path="/oders_list" element={<OrdersList />}></Route>
                <Route path="/message" element={<Message />}></Route>
                <Route path="/add_product" element={<AddProduct />}></Route>
                <Route path="/edit_product/:id" element={<EditProduct />}></Route>
                <Route path="/checkout" element={<CheckOut />}></Route>
                <Route path="/detail" element={<ProductDetail />}></Route>
                <Route path="/wishlist" element={<WishList />}></Route>
                <Route path="/products" element={<ProductCate />}></Route>
                <Route path="/profile/:id" element={<Profile />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/order" element={<MyOrder />}></Route>
            </Routes>
            <Footer />
        </Router>
    </>
}