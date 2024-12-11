import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch cart data when the page loads
    axios
      .get('http://localhost:3001/api/cart')
      .then((response) => {
        setCart(response.data);
      })
      .catch((err) => console.error('Error fetching cart:', err));
  }, []);

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.product_id !== productId);
    setCart(updatedCart);
    axios
      .delete(`http://localhost:3001/api/cart/${productId}`)
      .then(() => {
        console.log('Item removed successfully');
      })
      .catch((err) => {
        console.error('Error removing from cart:', err);
        setCart(cart);
      });
  };

  const handleIncrement = (productId) => {
    const updatedCart = cart.map((item) =>
      item.product_id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
    updateCartInDatabase(updatedCart);
  };

  const handleDecrement = (productId) => {
    const updatedCart = cart.map((item) =>
      item.product_id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    updateCartInDatabase(updatedCart);
  };

  const updateCartInDatabase = (updatedCart) => {
    axios
      .post('http://localhost:3001/api/cart/update', updatedCart)
      .catch((err) => console.error('Error updating cart in database:', err));
  };

  const handleCheckout = () => {
    axios
      .post('http://localhost:3001/api/checkout', { cart })
      .then(() => {
        alert('Order placed successfully!');
        setCart([]);
      })
      .catch((err) => console.error('Error during checkout:', err));
  };

  return (
    <div
      style={{
        padding: '40px',
        backgroundColor: '#f4f4f9',
        minHeight: '100vh',
         // Prevent horizontal scroll
      }}
    >
      {/* Embedded Responsive Styles */}
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
           
          }
          @media (max-width: 768px) {
            .cart-container {
              padding: 15px;
            }
            .cart-item {
              flex-direction: column;
              align-items: flex-start;
              gap: 10px;
            }
            .item-image {
              width: 80px;
              height: 80px;
            }
            .quantity-btn, .remove-btn {
              font-size: 14px;
            }
          }

          @media (max-width: 480px) {
            .cart-item {
              gap: 20px;
            }
            .checkout-btn {
              font-size: 14px;
              padding: 10px;
            }
          }
        `}
      </style>
      <div
        className="cart-container"
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            color: '#333',
            marginBottom: '20px',
          }}
        >
          Shopping Cart
        </h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div
                key={item.product_id}
                className="cart-item"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={item.image}
                    alt={item.productname}
                    className="item-image"
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      marginRight: '20px',
                    }}
                  />
                  <div>
                    <p>{item.productname}</p>
                    <p>₹{item.price}</p>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <button
                    className="quantity-btn"
                    style={{
                      padding: '5px 10px',
                      backgroundColor: '#ccc',
                      borderRadius: '5px',
                    }}
                    onClick={() => handleDecrement(item.product_id)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    style={{
                      padding: '5px 10px',
                      backgroundColor: '#ccc',
                      borderRadius: '5px',
                    }}
                    onClick={() => handleIncrement(item.product_id)}
                  >
                    +
                  </button>
                  <button
                    className="remove-btn"
                    style={{
                      padding: '10px 20px',
                      fontSize: '14px',
                      color: '#fff',
                      backgroundColor: '#f44336',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleRemoveFromCart(item.product_id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <button
              className="checkout-btn"
              style={{
                width: '100%',
                padding: '15px',
                fontSize: '16px',
                color: '#fff',
                backgroundColor: '#4CAF50',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '30px',
              }}
              onClick={handleCheckout}
            >
              Buy Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
