import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Cart from './components/cart';
import About from "./components/about";
import Contact from "./components/contact";
import Blog from "./components/blog";
import ProductDetail from './components/productDetail';
import Signup from './components/Signup';
import Wishlist from './components/Wishlist';


function App() {

  return (
    <>
      <div className='Container-fluid topTextBar'>
        <div className='container'>
           <p className='text-white text-center'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href='' className='text-white ms-2'>ShopNow</a></p>
        </div>
      </div>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
