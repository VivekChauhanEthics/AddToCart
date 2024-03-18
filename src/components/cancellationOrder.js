
import React, { useState } from 'react';
import "./css/cart.css";
import Header from './Header';
import Footer from "./footer";
import LoginForm from './login';

import { useSelector } from 'react-redux';

const OrdersStyle = {
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  WebkitLineClamp: 1,
  fontSize: '16px',
  fontWeight: '600',
  color: 'black',
  maxWidth: '100%',
  textOverflow: 'ellipsis', 
};


function Cancellation({ cancelledOrders }) {
  console.log("cancelled order ", cancelledOrders);
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

  const toggleTheme = () => {
    const currentTheme = document.body.classList.contains('theme-light')
      ? 'theme-light'
      : 'theme-dark';

    document.body.classList.remove(currentTheme);
    document.body.classList.add(currentTheme === 'theme-light' ? 'theme-dark' : 'theme-light');
  };
  const truncateTitle = (title) => {
    const maxLength = 20;
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Header onLogout={handleLogout} toggleTheme={toggleTheme} />
          <div className='container-fluid'>
            <div className='container p-0'>
              <h3 className='mt-3 ps-2'>Cancelled Orders</h3>
              {cancelledOrders.length === 0 ? (
                <div className='text-center text-white'>
                  <img src='https://static.vecteezy.com/system/resources/thumbnails/014/814/239/small/no-order-a-flat-rounded-icon-is-up-for-premium-use-vector.jpg' alt='..' className='img-fluid' />
                </div>
              ) : (
                <div className='row'>
                  {cancelledOrders.map((order, orderIndex) => (
                    <div className='my-4' style={{ background: "#f5f5f5", boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.3)", borderRadius:"10px" }}>
                      <div className='col-12 d-lg-flex  pt-2 ps-lg-3' key={orderIndex}>
                        <div className='col-lg-5 col-12'>
                          <div className='d-flex align-items-center'><h4 className='ps-2 mt-2' style={{border:"2px solid black", borderRadius:"50%", width:"30px", height:"30px"}}>{orderIndex + 1}</h4><img className='ms-2' style={{width:"35px"}} src="data:image/png;base64,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"/></div>
                          <div className='mt-lg-3'>
                            <div className=''>
                              <p><i style={{ fontWeight: "600" }}>Name:</i> <span style={{color:"#7f838a", fontWeight:"600"}}>{order.formData.fullName}</span></p>
                              <p><i style={{ fontWeight: "600" }}>Email:</i> <span style={{color:"#7f838a", fontWeight:"600"}}>{order.formData.emailAddress}</span></p>
                              <p><i style={{ fontWeight: "600" }}>Phone:</i> <span style={{color:"#7f838a", fontWeight:"600"}}>{order.formData.phoneNumber}</span></p>
                            </div>
                            <div><i style={{ fontWeight: "600" }}>Street Address:</i> <span style={{color:"#7f838a", fontWeight:"600"}}>{order.formData.streetAddress}</span></div>
                            <div className='d-flex gap-4 mt-3'>
                              <p><i style={{ fontWeight: "600" }}>City:</i> <span style={{color:"#7f838a", fontWeight:"600"}}>{order.formData.city}</span></p>
                              <p><i style={{ fontWeight: "600" }}>State:</i> <span style={{color:"#7f838a", fontWeight:"600"}}>{order.formData.state}</span></p>
                              <p><i style={{ fontWeight: "600" }}>Pin Code:</i> <span style={{color:"#7f838a", fontWeight:"600"}}>{order.formData.pinCode}</span></p>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-7 col-12 mt-lg-5'>
                          {order.productDetails.map((product, prodIndex) => (
                            <div className='gap-4 my-3' key={prodIndex} style={{ fontWeight: "600", display: "flex", alignItems: "center" }}>
                              <div className='OrderPgTitle' ><img src={product.image} alt='..' className='img-fluid' style={{ width: "25px" }} /><i className='ms-2' style={OrdersStyle}>{truncateTitle(product.title)}</i></div>
                              <p className='' style={{ fontWeight: "600", color: "green" }}>₹{product.price}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <h5 className='mb-3 ps-lg-3 bg-' style={{fontWeight:"650"}}><span>Total Payable Amount:</span> ₹   /-</h5>
                    </div>
                  ))}
                </div>
              )}
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

export default Cancellation;
