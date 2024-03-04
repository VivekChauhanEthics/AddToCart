
import React from 'react';
import "./css/product.css";
import {useDispatch, useSelector } from 'react-redux';
import {  addToCart } from '../redux/action/action';
import Header from './Header';
import Footer from './footer';

import ProductDImg1 from './images/productDetail/icon2.png';
import ProductDImg2 from './images/productDetail/Icon1.png';

const DiscriptionStyle = {
    // display: '-webkit-box',
    // WebkitBoxOrient: 'vertical',
    // overflow: 'hidden',
    // WebkitLineClamp: 2,
    fontSize: "15px",
    fontWeight: "400"
};
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
    
    const relatedProducts = products.filter((item) =>
    item.category.toLowerCase() === currentItem.category.toLowerCase() &&
    item.id !== currentItem.id 
);

    return (
        <>
            <Header toggleTheme={toggleTheme}/>
            <div className="container-fluid pb-5">
                <div className='container d-flex pb-5 justify-content-center'>
                    <div className='py-4'>
                        <div className='ProductDetailCardStyle' key={currentItem.id}>
                            <div className='col-md-6 d-flex justify-content-center' style={{background:"#F5F5F5", alignItems:"center"}}><img src={currentItem.image} style={{ width: "350px", height: "500px" }}  className='py-5'/></div>
                            <div className='col-md-6 p-2 ms-lg-5 '>
                                <div className=''>
                                    <p className=' p-1 m-0' style={{ fontSize: "20px", fontWeight: "600" }}> {currentItem.title}</p>
                                    <p className=' pb-2 p-1 m-0' style={{ fontSize: "15px", fontWeight: "600" }}>Rating:<span style={{color:"black", fontWeight:"600"}}> {currentItem.rating.rate} </span></p>
                                    <p className=' p-1 m-0' style={{ fontSize: "15px", fontWeight: "600" }}>Price: <span className='text-success'>{currentItem.price}</span></p>
                                    <p className=' p-1 m-0' style={{ fontSize: "15px", fontWeight: "600" }}>{currentItem.category}</p>
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
                    </div>
                </div>
                <div>
                    <div className='ps-5 container' style={{display:"flex", alignItems:"center"}}><span style={{width:"15px", height:"30px", background:"#DB4444", borderRadius:"3px", margin:"40px 0 0 20px"}}></span><h4 className='mt-5 ms-2' style={{color:"#DB4444"}}>Related Item</h4></div>
                    <div className="container" style={{ overflow: 'hidden', overflowY: 'hidden' }}>
                        <div className="d-flex gap-4 py-5">
                            {relatedProducts.map((item) => (
                            <div className='CardStyle' key={item.id}>
                                <div style={{alignItems:"center", display:'flex', justifyContent:"center"}}>
                                    <img className='HomeCardImg' src={item.image} style={{ width: '140px', height: '120px', cursor: 'pointer' }} alt={item.title} />
                                </div>
                                <div className="mt-2">
                                <p className="text-center p-0 m-0 " style={clampStyle}>
                                    {item.title}
                                </p>
                                <p className="text-center p-0 m-0 homeCardText" style={CategoryclampStyle}>
                                    {item.category}
                                </p>
                                <p className="text-center p-0 m-0 homeCardText" style={{ fontSize: '15px', fontWeight: '600' }}>
                                    Price: <span className="text-success">{item.price}</span>
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
            </div>
            <Footer/>
        </>
    );
}

export default ProductDetail;

