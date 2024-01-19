
import React, { useEffect, useState } from 'react';
import "./css/home.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, addToCart, productDetail } from '../redux/action/action';
import Header from './Header';
import Footer from './footer';
import LoginForm from './login';

const CardStyle = {
  width: '350px',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 1)',
  height: '325px',
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

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Header onLogout={handleLogout}/>
          <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
              <div className="carousel-item active">
                  <img src="https://itseeze.com/_webedit/cached-images/2761-0-0-1250-10000-7500-1344.png" className="d-block w-100 HomeCaroselImg" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://assets-global.website-files.com/5e0f6315ca8431ed8cb1cf73/5e1cf59a0bbd5b796d60f820_driftrock-facebook-carousel-ads.png" className="d-block w-100 HomeCaroselImg" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src="https://miro.medium.com/v2/resize:fit:1358/1*OmNtxIzLp-_R3kDqe8Rkcw.jpeg" className="d-block w-100 HomeCaroselImg" alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="container-fluid">
            <h1 className="text-center my-5">Products List</h1>
            <div className="d-flex justify-content-center ">
              <input
                type="text"
                placeholder="Search products..."
                value={searchInput}
                onChange={handleSearchInputChange}
                className='border'
              />
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
              </div>
            </div>
            <div className="container" style={{ overflow: 'scroll', overflowY: 'hidden' }}>
              <div className="d-flex gap-4 py-5">
                {filteredProducts.map((item) => (
                  <div style={CardStyle} key={item.id}>
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
                        Price: <span className="text-success">{item.price}</span>
                      </p>
                      <p className="text-center pb-2 m-0 homeCardText" style={{ fontSize: '15px', fontWeight: '400' }}>
                        Rating: {item.rating.rate}
                      </p>
                    </div>
                    <div className="text-center ">
                      <button className='AddToCartBtn bg-info-subtle' size="small" style={{ fontSize: '15px' }} onClick={() => handleAddToCart(item)}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='container-fluid mt-3 mt-lg-5'>
            <img src='https://www.shutterstock.com/image-vector/ecommerce-website-banner-template-presents-260nw-2252124451.jpg' alt='..' className='img-fluid HomeBannerImg'/>
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
