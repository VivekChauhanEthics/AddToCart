
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
import FlashSaleCountdown from './FlashSaleCountdown';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';


const clampStyle = {
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  WebkitLineClamp: 1,
  fontSize: '16px',
  fontWeight: '600',
  color:"black"
};
const CategoryclampStyle = {
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  WebkitLineClamp: 1,
  fontSize: '15px',
  fontWeight: '400',
  color:"#908e91"
};



function Home() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.product);
  const [searchInput, setSearchInput] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

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
          {/* carosel content */}
          <div className='d-md-flex container-fluid p-0 '>
            <div className='container p-0'>
              <div className='row caroselRow'>
                <div className='col-md-3 col-12 d-none d-lg-block' style={{borderRight:"1px solid #D6D5D5"}}>
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
                <div id="carouselExampleCaptions" className="carousel col-md-8 col-12 slide pt-lg-4">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={CaroselImg1} className="d-block w-100" alt="..."/>
                      <div className="carousel-caption">
                        <h5><span><img src={CaroselImg2} className='me-2 mb-2 text-start' /></span>iPhone 14 Series <br/>Up to 10% off Voucher</h5>
                        <a href='' className='text-white'>
                          Shop Now
                          <span className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={CaroselImg1} className="d-block w-100" alt="..."/>
                      <div className="carousel-caption d-none d-md-block ">
                        <h5 ><span><img src={CaroselImg2} className='me-2 mb-2 text-start' /></span>iPhone 14 Series <br/>Up to 10% off Voucher</h5>
                        <a href='' className='text-white' >
                          Shop Now
                          <span className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={CaroselImg1} className="d-block w-100" alt="..."/>
                      <div className="carousel-caption d-none d-md-block ">
                        <h5><span><img src={CaroselImg2} className='me-2 mb-2 text-start' /></span>iPhone 14 Series <br/>Up to 10% off Voucher</h5>
                        <a href='' className='text-white' >
                          Shop Now
                          <span className='ms-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* flash sale content */}
          <div className="container-fluid pt-5">
            <div className='container'>
              <div className='row'>
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
                    <FlashSaleCountdown/>
                  </div>
                </div>
                <div className="container" style={{width:"100%", height:"400px"}}>
                  <OwlCarousel 
                      className="owl-carousel owl-theme py-4"
                      loop={true}
                      margin={20}
                      nav={true}
                      autoplay={true}
                      autoplayTimeout={3000}
                      dots={false}
                      responsive={{
                        0: {
                          items: 2,
                        },
                        768: {
                          items: 4,
                        },
                        1000: {
                          items: 6,
                        },
                      }}
                    >
                    {FlashSale.map((item) => (
                      <div className='item CardStyle my-4'  key={item.id}>
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
                          <p className="text-center p-0 m-0 homeCardText text-dark" style={{ fontSize: '15px', fontWeight: '600' }}>
                            Price: <span className="text-success"> ₹{item.price}</span>
                          </p>
                          <p className="text-center pb-2 m-0 homeCardText text-dark" style={{ fontSize: '15px', fontWeight: '400' }}>
                            Rating: <span style={{color:"#fc530a"}}>{item.rating.rate}</span>
                          </p>
                        </div>
                        <div className="text-center ">
                          <button className='AddToCartBtn' size="small" style={{ fontSize: '15px' }} onClick={() => handleAddToCart(item)}>
                            Add To Cart
                          </button>
                        </div>
                      </div>
                      ))}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
          {/* Best Selling Products */}
          <div className='container-fluid'>
            <div className='container'>
              <div className='row'>
                <div className='ps-5' style={{display:"flex", alignItems:"center"}}><span style={{width:"15px", height:"30px", background:"#DB4444", borderRadius:"3px", margin:"40px 0 0 20px"}}></span><h4 className='mt-5 ms-2' style={{color:"#DB4444"}}>This Month</h4></div>
                <div className='ps-5 d-flex'>
                  <h2 className='mt-0 ms-3 me-auto' style={{color:"black"}}>Best Selling Products</h2>
                  <button className='btn bg-danger text-white me-5 px-5'>View All</button>
                </div>
                <div className="container">
                  <OwlCarousel 
                        className="owl-carousel owl-theme py-4"
                        loop={true}
                        margin={20}
                        nav={true}
                        autoplay={true}
                        autoplayTimeout={3000}
                        dots={false}
                        responsive={{
                          0: {
                            items: 2,
                          },
                          768: {
                            items: 4,
                          },
                          1000: {
                            items: 6,
                          },
                        }}
                      >
                      {bestSellingProducts.map((item) => (
                        <div className='item CardStyle my-4'  key={item.id}>
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
                            <p className="text-center p-0 m-0 homeCardText text-dark" style={{ fontSize: '15px', fontWeight: '600' }}>
                              Price: <span className="text-success"> ₹{item.price}</span>
                            </p>
                            <p className="text-center pb-2 m-0 homeCardText text-dark" style={{ fontSize: '15px', fontWeight: '400' }}>
                              Rating: <span style={{color:"#fc530a"}}>{item.rating.rate}</span>
                            </p>
                          </div>
                          <div className="text-center ">
                            <button className='AddToCartBtn' size="small" style={{ fontSize: '15px' }} onClick={() => handleAddToCart(item)}>
                              Add To Cart
                            </button>
                          </div>
                        </div>
                        ))}
                    </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
          {/* banner content */}
          <div className='container-fluid mt-3 mt-lg-5'>
            <div className='container'>
              <img src={BannerImg1} alt='..' className='img-fluid HomeBannerImg'/>
            </div>
          </div>
          {/* Explore Our Products */}
          <div className='container-fluid'>
            <div className='container'>
              <div className='row'>
              <div className='ps-5' style={{display:"flex", alignItems:"center"}}><span style={{width:"15px", height:"30px", background:"#DB4444", borderRadius:"3px", margin:"40px 0 0 20px"}}></span><h4 className='mt-5 ms-2' style={{color:"#DB4444"}}>Our Products</h4></div>
              <div className='ps-5 d-flex'>
                <h2 className='mt-5 ms-3' style={{ color: 'black' }}>Explore Our Products</h2>
              </div>
              <div className="container">
                <OwlCarousel 
                    className="owl-carousel owl-theme py-4"
                    loop={true}
                    margin={20}
                    nav={true}
                    autoplay={true}
                    autoplayTimeout={3000}
                    dots={false}
                    responsive={{
                      0: {
                        items: 2,
                      },
                      768: {
                        items: 4,
                      },
                      1000: {
                        items: 6,
                      },
                    }}
                  >
                  {filteredProducts.map((item) => (
                    <div className='item CardStyle my-4'  key={item.id}>
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
                        <p className="text-center p-0 m-0 homeCardText text-dark" style={{ fontSize: '15px', fontWeight: '600' }}>
                          Price: <span className="text-success"> ₹{item.price}</span>
                        </p>
                        <p className="text-center pb-2 m-0 homeCardText text-dark" style={{ fontSize: '15px', fontWeight: '400' }}>
                          Rating: <span style={{color:"#fc530a"}}>{item.rating.rate}</span>
                        </p>
                      </div>
                      <div className="text-center ">
                        <button className='AddToCartBtn' size="small" style={{ fontSize: '15px' }} onClick={() => handleAddToCart(item)}>
                          Add To Cart
                        </button>
                      </div>
                    </div>
                    ))}
                </OwlCarousel>
              </div>
              </div>
            </div>
          </div>
          {/* last container */}
          <div className='container-fluid'>
            <div className='container'>
              <div className='row py-3'>
                <div className='homeLastCont d-flex flex-column flex-md-row justify-content-center col-12'>
                  <div className='col-md-4 col-12 d-flex align-items-center justify-content-center'>
                    <img src={aboutLastContImg1} className='img-fluid' alt='..' />
                    <span>FREE AND FAST DELIVERY</span>
                    <p>Free delivery for all orders over  ₹350</p>
                  </div>
                  <div className='col-md-4 col-12 d-flex align-items-center justify-content-center'>
                    <img src={aboutLastContImg2} className='img-fluid' alt='..' />
                    <span>24/7 CUSTOMER SERVICE</span>
                    <p>Friendly 24/7 customer support</p>
                  </div>
                  <div className='col-md-4 col-12 d-flex align-items-center justify-content-center'>
                    <img src={aboutLastContImg3} className='img-fluid' alt='..' />
                    <span>MONEY BACK GUARANTEE</span>
                    <p>We reurn money within 30 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <Footer/>
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default Home;
