import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./navibar"; 
import Carosel from './caro';
import './shoplist.css';
import Footer from './footer'; 

const FisrtPage = () => {
  const navigate = useNavigate();

  const shops = [
    { id: 1, name: "balajishop", image: "images/shop1.jpg", address: "123 Street, City", rating: 4.5 },
    { id: 2, name: "Ravishop", image: "images/shop2.jpg", address: "456 Avenue, City", rating: 4.0 },
    { id: 3, name: "Mahalaxmishop", image: "images/shop3.jpg", address: "789 Boulevard, City", rating: 4.8 },
    { id: 4, name: "Srilaxmishop", image: "images/shop4.jpg", address: "456 Avenue, City", rating: 4.0 },
    { id: 5, name: "venkateswarlushop", image: "images/shop5.jpg", address: "456 Avenue, City", rating: 4.0 },
    { id: 6, name: "parvathishop", image: "images/shop2.jpg", address: "456 Avenue, City", rating: 4.0 },
    { id: 7, name: "ganeshshop", image: "images/shop1.jpg", address: "456 Avenue, City", rating: 4.0 },
    { id: 8, name: "vasudevshop", image: "images/shop5.jpg", address: "456 Avenue, City", rating: 4.0 },
  ];

  const handleCardClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <Navbar />
      <div>
        <Carosel />
        <img 
          src="images/fertilizer2.jpg" 
          alt="Shops Banner" 
          className="shop-banner" 
        />
        <div className="shop-list">
          {shops.map((shop) => (
            <div key={shop.id} className="shop-card" onClick={handleCardClick}>
              <img src={shop.image} alt={shop.name} className="shop-image" />
              <h3>{shop.name}</h3>
              <p>{shop.address}</p>
              <p>Rating: {shop.rating} ⭐</p>
            </div>
          ))}
        </div>
      </div>
      <Footer /> {/* Adding Footer component */}
    </div>
  );
};

export default FisrtPage;
