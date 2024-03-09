
import React from 'react';
import "./css/product.css";
import {useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  addToCart, productDetail } from '../redux/action/action';
import Header from './Header';
import Footer from './footer';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

import ProductDImg1 from './images/productDetail/icon2.png';
import ProductDImg2 from './images/productDetail/Icon1.png';

const DiscriptionStyle = {
    fontSize: "15px",
    fontWeight: "400"
};
const clampStyle = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: 1,
    fontSize: '20px',
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

function ProductDetail() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.product);
    const product = useSelector((state) => state.product.productDetails);

    console.log("product-detail", product);

    if (!product || product.length === 0) {
        return (
            <>
                <Header />
                <div className="container-fluid">
                    <h1 className='text-center my-5'>No Product Available</h1>
                </div>
            </>
        );
    }
    const currentItem = product[product.length - 1];

    const toggleTheme = () => {
        const currentTheme = document.body.classList.contains('theme-light')
          ? 'theme-light'
          : 'theme-dark';
    
        document.body.classList.remove(currentTheme);
        document.body.classList.add(currentTheme === 'theme-light' ? 'theme-dark' : 'theme-light');
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const handleProductDetail = (productDetails) => {
        dispatch(productDetail(productDetails));
      };
    
    const relatedProducts = products.filter((item) =>
    item.category.toLowerCase() === currentItem.category.toLowerCase() &&
    item.id !== currentItem.id 
);

    return (
        <>
            <Header toggleTheme={toggleTheme}/>
            <div className="container-fluid pb-5">
                <div className='container'>
                    <div className='row ProductDetailCardStyle col-12 py-5 pb-5' key={currentItem.id}>
                        <div className='col-md-6 d-flex justify-content-center' style={{background:"#F5F5F5", alignItems:"center"}}><img src={currentItem.image} style={{  }}  className='py-5 productDetailImg'/></div>
                        <div className='col-md-6 ps-lg-5  '>
                            <div className=''>
                                <p className=' p-1 m-0' style={{ fontSize: "20px", fontWeight: "600" }}> {currentItem.title}</p>
                                <p className=' pb-2 p-1 m-0' style={{ fontSize: "15px", fontWeight: "600" }}>Rating:<span style={{color:"#fc530a", fontWeight:"600"}}> {currentItem.rating.rate} </span></p>
                                <p className=' p-1 m-0' style={{ fontSize: "15px", fontWeight: "600" }}>Price: <span className='text-success'>{currentItem.price}</span></p>
                                <p className=' p-1 m-0' style={{ fontSize: "15px", fontWeight: "600" }}>Category: <span style={{color:"#908e91"}}>{currentItem.category}</span></p>
                                <p className=' p-1 m-0' style={DiscriptionStyle}><span style={{ fontSize: "15px", fontWeight: "600" }}>Description:</span> {currentItem.description}</p>
                            </div>
                            <div className='my-3' style={{ display:"flex", gap:"10px", alignItems:"center"}}>
                                <span style={{fontSize:"16px", fontWeight:"600"}} className='ms-1'>Size :  </span>
                                <input type="radio" class="btn-check" name="options-base" id="option5" autocomplete="off" />
                                <label class="btn" for="option5">S</label>

                                <input type="radio" class="btn-check" name="options-base" id="option6" autocomplete="off"/>
                                <label class="btn" for="option6">M</label>

                                <input type="radio" class="btn-check" name="options-base" id="option7" autocomplete="off"/>
                                <label class="btn" for="option7">L</label>

                                <input type="radio" class="btn-check" name="options-base" id="option8" autocomplete="off"/>
                                <label class="btn" for="option8">XL</label>

                                <input type="radio" class="btn-check" name="options-base" id="option8" autocomplete="off" disabled/>
                                <label class="btn" for="option8">XXL</label>
                            </div>
                            <div className=' mt-3 p-1 d-flex gap-2'>
                                <button size="small" style={{ fontSize: "15px", color: "white", background:"#DB4444" }} className='border-0 px-3 py-1'>Buy Now</button>
                                <button size="small" style={{ fontSize: "15px", color: "white", background:"#000"  }} className='border-0 px-3 py-1' onClick={() => handleAddToCart(currentItem)}>Add To Card</button>
                            </div>
                            <div>
                                <div className='d-flex mt-3' style={{border:"1px solid #7D8184", padding:"10px 20px"}}>
                                <img src={ProductDImg1} alt='...' className='img-fluid' style={{width:"30px", height:"30px"}}/>
                                <div className='ps-3'>
                                    <p className='m-0' style={{fontSize:"16px", fontWeight:"600"}}>Free Delivery</p>
                                    <a href='' className='text-dark' style={{fontSize:"14px", fontWeight:"400"}}>Enter your postal code for Delivery Availability</a>
                                </div>
                                </div>
                                <div className='d-flex mt-0' style={{border:"1px solid #7D8184", borderTop:"none", padding:"10px 20px"}}> 
                                <img src={ProductDImg2} alt='...' className='img-fluid' style={{width:"30px", height:"30px"}}/>
                                <div className='ps-3'>
                                    <p className='m-0' style={{fontSize:"16px", fontWeight:"600"}}>Return Delivery</p>
                                    <a href='' style={{fontSize:"14px", fontWeight:"400"}} className='text-dark'>Free 30 Days Delivery Returns. Details</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row ps-lg-5'>
                        <div className='container ps-lg-5' style={{display:"flex", alignItems:"center"}}><span style={{width:"15px", height:"30px", background:"#DB4444", borderRadius:"3px"}}></span><h4 className='mt-2 ms-2' style={{color:"#DB4444"}}>Related Item</h4></div>
                        <div className="container ps-lg-5" style={{ overflow: 'hidden', overflowY: 'hidden' }}>
                            <div className="container ps-0">
                                <OwlCarousel 
                                    className="owl-carousel owl-theme py-lg-4"
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
                                        items: 5,
                                    },
                                    1400: {
                                        items: 6,
                                    },
                                    }}
                                >
                                {relatedProducts.map((item) => (
                                    <div className='item CardStyle my-4'  key={item.id}>
                                    <Link to="/productDetail" onClick={() => handleProductDetail(item)}>
                                        <div className='text-center ps-2'>
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
            </div>
            <Footer/>
        </>
    );
}

export default ProductDetail;

