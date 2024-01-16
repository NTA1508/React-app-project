import '../App.css';
import Header from './header';
// import Home from './pages/home'
import Footer from './footer';
import CountdownTimer from './pages/hometest';

export default function Index(){
    return<>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <Header/>
        {/* <Home/>    */}
        <CountdownTimer/>
        <Footer/>   
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    </>
}