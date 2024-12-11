import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navibar.css';
import { FaShoppingCart } from "react-icons/fa"; // Correct import

const Navbar = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0); // State to track cart items

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    console.log('Logged out');
    navigate('/about');
  };

  const handleAbout = () => {
    navigate('/about');
  };

  const handleCart = () => {
    navigate('/cart');
  };

  // Function to increment cart count (called from Product Details page)
  const incrementCartCount = () => {
    setCartCount(cartCount + 1); // Increment cart count by 1
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-logo">ShopList</a>
      </div>
      <div className="navbar-right">
        <button onClick={handleLogin}>Login</button>
        {/* <button onClick={handleLogout}>Logout</button> */}
        <button onClick={handleAbout}>About</button>
        {/* <div className="cart-container" onClick={handleCart}>
          <FaShoppingCart className="cart-icon" />
          <span className="cart-count">{cartCount}</span>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
