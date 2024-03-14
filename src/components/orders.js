import React, { useState } from 'react';
import "./css/cart.css";
import Header from './Header';
import Footer from "./footer";
import LoginForm from './login';

import { useSelector } from 'react-redux';


function Orders() {

  const Myorders = useSelector((state) => state.product.orders);
  console.log("orders component", Myorders);

  let allProducts = [];
  Myorders.forEach(order => {
      const productDetails = order.productDetails;
      if (productDetails && productDetails.length > 0) {
          allProducts = [...allProducts, ...productDetails];
      }
  });
  console.log("orders component All product:", allProducts);


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

  return (
    <div>
    {isLoggedIn ? (
      <>
        <Header onLogout={handleLogout} toggleTheme={toggleTheme}/>
        <div className='container-fluid p-0'>
          <div className='container p-0'>
            <h1>Orders</h1>
            {Myorders.length === 0 ? (
              <div className='text-center text-white'>
                <img src='https://static.vecteezy.com/system/resources/thumbnails/014/814/239/small/no-order-a-flat-rounded-icon-is-up-for-premium-use-vector.jpg' alt='..' className='img-fluid' />
              </div>
            ) : (
              <div>
                {Myorders.map((order, index) => (
                    <div key={index}>
                      <h2>Order {index + 1}</h2>
                      <p>Full Name: {order.formData.fullName}</p>
                      <p>Email Address: {order.formData.emailAddress}</p>
                      <p>Phone Number: {order.formData.phoneNumber}</p>
                      <p>Street Address: {order.formData.streetAddress}</p>
                      <p>City: {order.formData.city}</p>
                      <p>State: {order.formData.state}</p>
                      <p>Pin Code: {order.formData.pinCode}</p>
                      {/* Display each product in the order */}
                      <h3>Products:</h3>
                      {allProducts.map((product, prodIndex) => (
                        <div key={prodIndex}>
                          <p>Title: {product.title}</p>
                          <p>Price: {product.price}</p>
                          {/* Display other product details as needed */}
                        </div>
                      ))}
                      {/* Other order details */}
                      <p>Total Price: {order.totalPrice}</p>
                    </div>
                  ))}
              </div>
            )}
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

export default Orders;
