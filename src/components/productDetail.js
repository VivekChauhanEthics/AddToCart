
import React from 'react';
import "./css/product.css";
import { useSelector } from 'react-redux';
import Header from './Header';

const DiscriptionStyle = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: 2,
    fontSize: "15px",
    fontWeight: "400"
};

function ProductDetail() {
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

    return (
        <>
            <Header />
            <div className="container-fluid">
                <h1 className='text-center my-5'>Products Detail</h1>
                <div className='container d-flex justify-content-center'>
                    <div className='py-4'>
                        <div className='CardStyle' key={currentItem.id}>
                            <div><img src={currentItem.image} style={{ width: "310px", height: "300px" }} /></div>
                            <div className='p-2 ms-lg-5 productDetailCardCont'>
                                <div className='mt-5 productDetailCardCont'>
                                    <p className='text-center p-1 m-0' style={{ fontSize: "20px", fontWeight: "600" }}> {currentItem.title}</p>
                                    <p className='text-center p-1 m-0' style={{ fontSize: "15px", fontWeight: "400" }}>{currentItem.category}</p>
                                    <p className='text-center p-1 m-0' style={{ fontSize: "15px", fontWeight: "600" }}>Price: <span className='text-success'>{currentItem.price}</span></p>
                                    <p className='text-center p-1 m-0' style={DiscriptionStyle}>Description:{currentItem.description}</p>
                                    <p className='text-center pb-2 m-0' style={{ fontSize: "15px", fontWeight: "400" }}>Rating:<span className='bg-success text-white'> {currentItem.rating.rate} </span></p>
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
        </>
    );
}

export default ProductDetail;

