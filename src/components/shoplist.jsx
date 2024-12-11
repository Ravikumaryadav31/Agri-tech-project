import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carosel from './caro';
import Footer from './footer';
import './shoplist.css';
import { FaShoppingCart } from "react-icons/fa"; // Correct import

const ShopListWithNavbar = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0); // State to track cart items

  // Shops Data
  const shops = [
    { id: 1, name: "balajishop", image: "images/shop1.jpg", address: "123 Street, City", rating: 4.5 },
    { id: 2, name: "Ravishop", image: "images/shop2.jpg", address: "456 Avenue, City", rating: 4.0 },
    { id: 3, name: "Mahalaxmishop", image: "images/shop3.jpg", address: "789 Boulevard, City", rating: 4.8 },
    { id: 4, name: "Srilaxmishop", image: 'images/shop4.jpg', address: "456 Avenue, City", rating: 4.0 },
    { id: 5, name: "venkateswarlushop", image: "images/shop5.jpg", address: "456 Avenue, City", rating: 4.0 },
    { id: 6, name: "parvathishop", image: "images/shop2.jpg", address: "456 Avenue, City", rating: 4.0 },
    { id: 7, name: "ganeshshop", image: "images/shop1.jpg", address: "456 Avenue, City", rating: 4.0 },
    { id: 8, name: "vasudevshop", image: "images/shop5.jpg", address: "456 Avenue, City", rating: 4.0 },
  ];

  // Navigation Handlers
  const handleAbout = () => {
    navigate('/About');
  };

  const handleCart = () => {
    navigate('/cart');
  };

  const handleCardClick = async (shopName) => {
    try {
      const response = await fetch(`https://backend-dxkf.onrender.com/api/${shopName}`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const products = await response.json();
      navigate(`/products/${shopName}`, { state: { products } });
      incrementCartCount(); // Increment cart count when shop card is clicked
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Function to increment cart count
  const incrementCartCount = () => {
    setCartCount(cartCount + 1); // Increment cart count by 1
  };

  return (
    <div className='maincontainer'>
      {/* Navbar Section */}
      <div className="navbar">
        <div className="navbar-left">
          <a href="/" className="navbar-logo">ShopList</a>
        </div>
        <div className="navbar-right">
          <button onClick={handleAbout}>About</button>
          <div className="cart-container" onClick={handleCart}>
            <FaShoppingCart className="cart-icon" />
            <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </div>

      {/* Shop List Section */}
      <div>
        <Carosel />
        <img 
          src="images/fertilizer2.jpg" 
          alt="Shops Banner" 
          className="shop-banner" 
          style={{ width: '100%', margin: '20px 0' }}
        />
        <div className="shop-list">
          {shops.map((shop) => (
            <div
              key={shop.id}
              className="shop-card"
              onClick={() => handleCardClick(shop.name)} // Increment cart count on card click
            >
              <img src={shop.image} alt={shop.name} className="shop-image" />
              <h3>{shop.name}</h3>
              <p>{shop.address}</p>
              <p>Rating: {shop.rating} ⭐</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ShopListWithNavbar;

