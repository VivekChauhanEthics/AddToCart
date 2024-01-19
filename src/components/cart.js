
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

  return (
    <>
      <Header />
      <div className='cartContainer'>
        <div className=' my-3 me-auto w-100'>
          <h1 className='my-2 text-center'>Cart Items</h1>
          <div className='d-flex justify-content-center'>
            {cart.length !== 0 ?  (<ul className='CartContStyle'>
              {cart.map((item) => (
                <div
                  className='d-flex justify-content-center my-3 CarTStyle'
                  key={item.id}
                >
                  <div>
                    <img
                      src={item.image}
                      style={{ width: '150px', height: '180px' }}
                      alt={item.title}
                    />
                  </div>
                  <div>
                    <div className=''>
                      <p
                        className='text-center p-0 m-0'
                        style={{ fontSize: '15px', fontWeight: '600' }}
                      >
                        {item.title}
                      </p>
                      <p
                        className='homeCardText text-center p-0 m-0'
                        style={{ fontSize: '15px', fontWeight: '400' }}
                      >
                        {item.category}
                      </p>
                      <p
                        className='homeCardText text-center p-0 m-0'
                        style={{ fontSize: '15px', fontWeight: '600' }}
                      >
                        Price: <span className='text-success'>{item.price}</span>
                      </p>
                      <p
                        className='homeCardText text-center pb-2 m-0'
                        style={{ fontSize: '15px', fontWeight: '400' }}
                      >
                        Quantity:
                        <button onClick={() => QuantityDec(item.id)} className='border-0'>
                          -
                        </button>
                        {item.quantity}
                        <button onClick={() => QuantityInc(item.id)} className='border-0'>
                          +
                        </button>
                      </p>
                      <p
                        className='homeCardText text-center pb-2 m-0'
                        style={{ fontSize: '15px', fontWeight: '500' }}
                      >
                        Rating: {item.rating.rate}
                      </p>
                    </div>
                    <div className='text-center mb-3'>
                      <button
                        className='AddToCartBtn'
                        size='small'
                        style={{ fontSize: '15px' }}
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        Remove Item
                      </button>
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
          <h2>Total Items</h2>
          <p>Quantity: {cart.reduce((total, item) => total + item.quantity, 0)}</p>
          <p>Amount: ₹{totalAmount.toFixed(2)}</p>
          <p>Discount: ₹ -{discount}</p>
          <p>Delivery Charge: ₹ 0.0</p>
          <h5>Total Amount: ₹{(totalAmount - discount).toFixed(2)} /-</h5>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Cart;
