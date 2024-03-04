
import React, { useEffect, useState } from 'react';
import "./css/home.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, addToCart, productDetail } from '../redux/action/action';
import Header from './Header';
import Footer from './footer';
import LoginForm from './login';

import CaroselImg1 from './images/carosel/Frame 560 (1).png';
import CaroselImg2 from './images/carosel/AppleImg.png';
import BannerImg1 from "./images/Home/Frame 600.png"
import aboutLastContImg1 from './images/about/S1.png';
import aboutLastContImg2 from './images/about/S2.png';
import aboutLastContImg3 from './images/about/S3.png';

const clampStyle = {
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  WebkitLineClamp: 2,
  fontSize: '20px',
  fontWeight: '600',
};
const CategoryclampStyle = {
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  WebkitLineClamp: 1,
  fontSize: '15px',
  fontWeight: '400',
};



function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.product);
  const [searchInput, setSearchInput] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );



  const calculateRemainingTime = () => {
    const flashSaleEndTime = new Date('2024-03-05T18:00:00Z');
    const now = new Date();
    
    let differenceInSeconds = Math.floor((flashSaleEndTime - now) / 1000);
  
    // If remaining time is negative or zero, reset it to the initial flash sale duration
    if (differenceInSeconds <= 0) {
      const oneHourLater = new Date();
      oneHourLater.setHours(oneHourLater.getHours() + 1); 
      differenceInSeconds = Math.floor((oneHourLater - now) / 1000);
    }
    return differenceInSeconds;
  };
  

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    // Update remaining time every second
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);
    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleProductDetail = (productDetails) => {
    dispatch(productDetail(productDetails));
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const bestSellingProducts = filteredProducts.filter((item) => item.rating.rate >= 4.5);
  const FlashSale = filteredProducts.filter((item) => item.rating.rate <= 3);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

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
          <div className='d-md-flex container-fluid'>
            <div className='col-md-3 col-12' style={{borderRight:"1px solid #D6D5D5"}}>
              <div className='container d-flex flex-column gap-2' style={{padding:"50px 0 0 60px"}}>
                <a href='#' className='text-dark ' style={{fontSize:"15px", textDecoration:"none"}}>Woman's Fashion </a>
                <a href='#' className='text-dark ' style={{fontSize:"15px", textDecoration:"none"}}>Men’s Fashion </a>
                <a href='#' className='text-dark ' style={{fontSize:"15px", textDecoration:"none"}}>Electronics </a>
                <a href='#' className='text-dark ' style={{fontSize:"15px", textDecoration:"none"}}>Home & Lifestyle </a>
                <a href='#' className='text-dark ' style={{fontSize:"15px", textDecoration:"none"}}>Medicine </a>
                <a href='#' className='text-dark ' style={{fontSize:"15px", textDecoration:"none"}}>Sports & Outdoor </a>
                <a href='#' className='text-dark ' style={{fontSize:"15px", textDecoration:"none"}}>Baby’s & Toys </a>
                <a href='#' className='text-dark ' style={{fontSize:"15px", textDecoration:"none"}}>Groceries & Pets </a>
                <a href='#' className='text-dark ' style={{fontSize:"15px", textDecoration:"none"}}>Health & Beauty</a>
              </div>
            </div>
            <div id="carouselExampleCaptions" class="carousel col-md-8 col-12 slide pt-lg-4">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={CaroselImg1} class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block " style={{margin:"0 400px 100px 0 ", padding:"0"}}>
                    <h5 style={{fontSize:"25px"}}><span><img src={CaroselImg2} style={{width:"30px"}} className='me-2 mb-2 text-start' /></span>iPhone 14 Series <br/>Up to 10% off Voucher</h5>
                    <a href='' className='text-white' style={{fontSize:"25px", textDecoration:"none"}}>
                      Shop Now
                      <span className='ms-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={CaroselImg1} class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block " style={{margin:"0 400px 100px 0 ", padding:"0"}}>
                    <h5 style={{fontSize:"25px"}}><span><img src={CaroselImg2} style={{width:"30px"}} className='me-2 mb-2 text-start' /></span>iPhone 14 Series <br/>Up to 10% off Voucher</h5>
                    <a href='' className='text-white' style={{fontSize:"25px", textDecoration:"none"}}>
                      Shop Now
                      <span className='ms-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={CaroselImg1} class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block " style={{margin:"0 400px 100px 0 ", padding:"0"}}>
                    <h5 style={{fontSize:"25px"}}><span><img src={CaroselImg2} style={{width:"30px"}} className='me-2 mb-2 text-start' /></span>iPhone 14 Series <br/>Up to 10% off Voucher</h5>
                    <a href='' className='text-white' style={{fontSize:"25px", textDecoration:"none"}}>
                      Shop Now
                      <span className='ms-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="container-fluid pt-5">
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
              <div className='ps-5' style={{display:"flex", alignItems:"center"}}><span style={{width:"15px", height:"30px", background:"#DB4444", borderRadius:"3px", margin:"40px 0 0 20px"}}></span><h4 className='mt-5 ms-2' style={{color:"#DB4444"}}>Todays</h4></div>
              <div className="d-flex justify-content-center me-5 mt-5" style={{border:"1px solid #D6D5D5 ", width:"30%", padding:"5px 10px", background:"#e6e1e1", borderRadius:"5px"}}>
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchInput}
                  onChange={handleSearchInputChange}
                  className='border-0 w-100 bg-transparent'
                />
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className='ps-5 d-flex'>
            <h2 className='mt-5 ms-3' style={{ color: 'black' }}>Flash Sales</h2>
            <div className='ms-5 d-flex'>
              <ul className='list-unstyled d-flex gap-3 HomePgTime'>
                <li>
                  <p>Hours</p>
                  <span>{Math.floor((remainingTime % 86400) / 3600)}</span>
                </li>
                <li className='dots'>:</li>
                <li>
                  <p>Minutes</p>
                  <span>{Math.floor((remainingTime % 3600) / 60)}</span>
                </li>
                <li className='dots'>:</li>
                <li>
                  <p>Seconds</p>
                  <span>{remainingTime % 60}</span>
                </li>
              </ul>
            </div>
          </div>
            <div className="container" style={{ overflow: 'scroll', overflowY: 'hidden' }}>
              <div className="d-flex gap-4 py-5">
                {FlashSale.map((item) => (
                  <div className='CardStyle' key={item.id}>
                    <Link to="/productDetail" onClick={() => handleProductDetail(item)}>
                      <div>
                        <img className='HomeCardImg' src={item.image} style={{ width: '140px', height: '120px', cursor: 'pointer' }} alt={item.title} />
                      </div>
                    </Link>
                    <div className="mt-2">
                      <p className="text-center p-0 m-0 " style={clampStyle}>
                        {item.title}
                      </p>
                      <p className="text-center p-0 m-0 homeCardText" style={CategoryclampStyle}>
                        {item.category}
                      </p>
                      <p className="text-center p-0 m-0 homeCardText" style={{ fontSize: '15px', fontWeight: '600' }}>
                        Price: <span className="text-success"> ₹{item.price}</span>
                      </p>
                      <p className="text-center pb-2 m-0 homeCardText" style={{ fontSize: '15px', fontWeight: '400' }}>
                        Rating: {item.rating.rate}
                      </p>
                    </div>
                    <div className="text-center ">
                      <button className='AddToCartBtn' size="small" style={{ fontSize: '15px' }} onClick={() => handleAddToCart(item)}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='ps-5' style={{display:"flex", alignItems:"center"}}><span style={{width:"15px", height:"30px", background:"#DB4444", borderRadius:"3px", margin:"40px 0 0 20px"}}></span><h4 className='mt-5 ms-2' style={{color:"#DB4444"}}>This Month</h4></div>
          <div className='ps-5 d-flex'>
            <h2 className='mt-0 ms-3 me-auto' style={{color:"black"}}>Best Selling Products</h2>
            <button className='btn bg-danger text-white me-5 px-5'>View All</button>
          </div>
          <div className="container" style={{ overflow: 'hidden', overflowY: 'hidden' }}>
            <div className="d-flex gap-4 py-5">
              {bestSellingProducts.map((item) => (
                <div className='CardStyle' key={item.id}>
                  <Link to="/productDetail" onClick={() => handleProductDetail(item)}>
                    <div>
                      <img className='HomeCardImg' src={item.image} style={{ width: '140px', height: '120px', cursor: 'pointer' }} alt={item.title} />
                    </div>
                  </Link>
                  <div className="mt-2">
                    <p className="text-center p-0 m-0 " style={clampStyle}>
                      {item.title}
                    </p>
                    <p className="text-center p-0 m-0 homeCardText" style={CategoryclampStyle}>
                      {item.category}
                    </p>
                    <p className="text-center p-0 m-0 homeCardText" style={{ fontSize: '15px', fontWeight: '600' }}>
                      Price: <span className="text-success"> ₹{item.price}</span>
                    </p>
                    <p className="text-center pb-2 m-0 homeCardText" style={{ fontSize: '15px', fontWeight: '400' }}>
                      Rating: {item.rating.rate}
                    </p>
                  </div>
                  <div className="text-center ">
                    <button className='AddToCartBtn' size="small" style={{ fontSize: '15px' }} onClick={() => handleAddToCart(item)}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='container-fluid mt-3 mt-lg-5'>
            <img src={BannerImg1} alt='..' className='img-fluid HomeBannerImg'/>
          </div>
          <div>
            <div className='ps-5' style={{display:"flex", alignItems:"center"}}><span style={{width:"15px", height:"30px", background:"#DB4444", borderRadius:"3px", margin:"40px 0 0 20px"}}></span><h4 className='mt-5 ms-2' style={{color:"#DB4444"}}>Todays</h4></div>
            <div className='ps-5 d-flex'>
              <h2 className='mt-5 ms-3' style={{ color: 'black' }}>Flash Sales</h2>
            </div>
            <div className="container" style={{ overflow: 'scroll', overflowY: 'hidden' }}>
              <div className="d-flex gap-4 py-5">
                {filteredProducts.map((item) => (
                  <div className='CardStyle' key={item.id}>
                    <Link to="/productDetail" onClick={() => handleProductDetail(item)}>
                      <div>
                        <img className='HomeCardImg' src={item.image} style={{ width: '140px', height: '120px', cursor: 'pointer' }} alt={item.title} />
                      </div>
                    </Link>
                    <div className="mt-2">
                      <p className="text-center p-0 m-0 " style={clampStyle}>
                        {item.title}
                      </p>
                      <p className="text-center p-0 m-0 homeCardText" style={CategoryclampStyle}>
                        {item.category}
                      </p>
                      <p className="text-center p-0 m-0 homeCardText" style={{ fontSize: '15px', fontWeight: '600' }}>
                        Price: <span className="text-success"> ₹{item.price}</span>
                      </p>
                      <p className="text-center pb-2 m-0 homeCardText" style={{ fontSize: '15px', fontWeight: '400' }}>
                        Rating: {item.rating.rate}
                      </p>
                    </div>
                    <div className="text-center ">
                      <button className='AddToCartBtn' size="small" style={{ fontSize: '15px' }} onClick={() => handleAddToCart(item)}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <section className='py-3'>
            <div className='homeLastCont'>
              <div>
                <img src={aboutLastContImg1} className='img-fluid' alt='..' />
                <span>FREE AND FAST DELIVERY</span>
                <p>Free delivery for all orders over  ₹350</p>
              </div>
              <div>
                <img src={aboutLastContImg2} className='img-fluid' alt='..' />
                <span>24/7 CUSTOMER SERVICE</span>
                <p>Friendly 24/7 customer support</p>
              </div>
              <div>
                <img src={aboutLastContImg3} className='img-fluid' alt='..' />
                <span>MONEY BACK GUARANTEE</span>
                <p>We reurn money within 30 days</p>
              </div>
            </div>
          </section>
        <Footer/>
        </>
        
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
      
    </div>
  );
}

export default Home;
