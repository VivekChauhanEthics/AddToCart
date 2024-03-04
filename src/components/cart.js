
import React, { useState, useEffect } from 'react';
import "./css/cart.css";
import Header from './Header';
import Footer from "./footer";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity  } from '../redux/action/action';

function Cart() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);

  const cart = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    // Update total amount when cart changes
    setTotalAmount(calculateTotalAmount());
    TotalDiscount();
  }, [cart]);

  const calculateTotalAmount = () => {
    let totalAmount = 0;
    cart.forEach((item) => {
      totalAmount += item.price * item.quantity;
    });
    return totalAmount;
  };

  const TotalDiscount = () => {
    setDiscount(25);
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const QuantityDec = (productId) => {
    dispatch(updateQuantity(productId, Math.max(cart.find(item => item.id === productId)?.quantity - 1, 1)));
  };
  
  const QuantityInc = (productId) => {
    dispatch(updateQuantity(productId, Math.min(cart.find(item => item.id === productId)?.quantity + 1, 5)));
  };
  

  const toggleTheme = () => {
    const currentTheme = document.body.classList.contains('theme-light')
      ? 'theme-light'
      : 'theme-dark';

    document.body.classList.remove(currentTheme);
    document.body.classList.add(currentTheme === 'theme-light' ? 'theme-dark' : 'theme-light');
  };

  return (
    <>
      <Header toggleTheme={toggleTheme}/>
      <div className='cartContainer container-fluid'>
        <div className=' my-3 me-auto' style={{width:"70%"}}>
          <div className='container' style={{padding:"0 0 0 130px"}}><h4 className='my-2 ms-5'>Cart Products</h4></div>
          <div className='d-flex justify-content-center'>
            {cart.length !== 0 ?  (<ul className='CartContStyle'>
              {cart.map((item) => (
                <div
                  className='d-flex my-3 CarTStyle'
                  key={item.id}
                >
                  <div  style={{ width: '10%'}}>
                    <img
                      src={item.image}
                      style={{ width: '100%', height: 'auto' }}
                      alt={item.title}
                    />
                  </div>
                  <div style={{display:"flex", gap:"10%", width:"90%"}}>
                    <div style={{ width:"50%"}}>
                      <p
                        className=' p-0 ps-3 m-0'
                        style={{ fontSize: '15px', fontWeight: '600'}}
                      >
                        {item.title}
                      </p>
                      <p
                        className='homeCardText ps-3 pb-2 mt-2'
                        style={{ fontSize: '14px', fontWeight: '500' }}
                      >
                        Rating: {item.rating.rate}
                      </p>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", width:"50%"}}>
                      <div style={{display:"flex", flexDirection:"row", gap:"50px", width:"100%"}}>
                        <p
                          className='homeCardText me-auto ps-4 p-0 m-0'
                          style={{ fontSize: '16px', fontWeight: '600' }}
                        >
                          <div style={{display:"flex", flexDirection:"column"}}>
                            <span>Price</span>
                            <span className='text-success mt-2'>₹ {item.price}</span>
                          </div>
                        </p>
                        <p
                          className='homeCardText pb-2 pe-5 m-0'
                          style={{ fontSize: '14px', fontWeight: '400' }}
                        >
                          <div>
                            <span style={{ fontSize: '14px', fontWeight: '600' }}>Quantity</span>
                            <div className='mt-2'>
                              <button onClick={() => QuantityDec(item.id)} className='border-0 me-2'>
                                -
                              </button>
                              {item.quantity}
                              <button onClick={() => QuantityInc(item.id)} className='border-0 ms-2'>
                                +
                              </button>
                            </div>
                          </div>
                        </p>
                      </div>
                      <div className='text-center mt-3'>
                        <button
                          className='CartRemoveBtn'
                          size='small'
                          style={{ fontSize: '15px', width:"100%" }}
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </ul> 
              ):(
                <div className='cartContainer'>
                  <div className='text-center my-3 me-auto'>
                    <img src='https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png' alt='emptyCatImg' className='img-fluid' />
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <div className='AmountCarTStyle'>
          <h4>Cart Total</h4>
          <p>Quantity: {cart.reduce((total, item) => total + item.quantity, 0)}</p>
          <p style={{borderBottom:"1px solid #D6D5D5"}} className='pb-3'>Amount: ₹{totalAmount.toFixed(2)}</p>
          <p>Discount: ₹ -{discount}</p>
          <p style={{borderBottom:"1px solid #D6D5D5"}} className='pb-3'>Delivery Charge: <span className='ps-2 text-success' style={{font:"14px", fontWeight:"400"}}>Free</span></p>
          <h5>Total Amount: ₹{(totalAmount - discount).toFixed(2)} /-</h5>
          <div className='text-center mt-3'>
            <button
              className='CartRemoveBtn'
              style={{ fontSize:'22px', width:"100%", height:"38px", fontWeight:"600" }}
            >
              Procees to checkout
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Cart;
