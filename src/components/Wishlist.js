
import React, { useState } from 'react';
import "./css/product.css";
import { useSelector } from 'react-redux';
import Header from './Header';
import Footer from './footer';
import LoginForm from './login';

const DiscriptionStyle = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: 2,
    fontSize: "15px",
    fontWeight: "400"
};

function Wishlist() {
    
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('isLoggedIn') === 'true'
      );
    
      const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
      };
      const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
      };

    const product = useSelector((state) => state.product.productDetails);
    console.log("product-detail", product);

    const toggleTheme = () => {
        const currentTheme = document.body.classList.contains('theme-light')
          ? 'theme-light'
          : 'theme-dark';
    
        document.body.classList.remove(currentTheme);
        document.body.classList.add(currentTheme === 'theme-light' ? 'theme-dark' : 'theme-light');
      };

    return (
        <div>
        {isLoggedIn ? (
            <>
                <Header onLogout={handleLogout} toggleTheme={toggleTheme}/>
                <div className="container-fluid">
                    <h1 className='text-center my-5'>Wishlist</h1>
                    <div className='container d-flex justify-content-center'>
                        <div className='py-4'>
                            <div className='CardStyle'>
                                {/* <div><img src={currentItem.image} style={{ width: "310px", height: "300px" }} /></div> */}
                                <div className='p-2 ms-lg-5 productDetailCardCont'>
                                    <div className='mt-5 productDetailCardCont'>
                                        <p className='text-center p-1 m-0' style={{ fontSize: "20px", fontWeight: "600" }}></p>
                                        <p className='text-center p-1 m-0' style={{ fontSize: "15px", fontWeight: "400" }}></p>
                                        <p className='text-center p-1 m-0' style={{ fontSize: "15px", fontWeight: "600" }}>Price: <span className='text-success'></span></p>
                                        <p className='text-center p-1 m-0' style={DiscriptionStyle}>Description:</p>
                                        <p className='text-center pb-2 m-0' style={{ fontSize: "15px", fontWeight: "400" }}>Rating:<span className='bg-success text-white'>  </span></p>
                                    </div>
                                    <div className='justify-content-center mt-3 d-flex gap-2'>
                                        <button size="small" style={{ fontSize: "15px", color: "green" }}>Buy Now</button>
                                        <button size="small" style={{ fontSize: "15px" }}>Add To Card</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
            </>
            ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
    );
}

export default Wishlist;

