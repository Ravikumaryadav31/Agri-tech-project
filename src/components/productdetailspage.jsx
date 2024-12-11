import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();  // Import useNavigate hook
  const { product } = location.state || {};

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (operation) => {
    setQuantity((prevQuantity) => {
      if (operation === 'increment') return prevQuantity + 1;
      if (operation === 'decrement' && prevQuantity > 1) return prevQuantity - 1;
      return prevQuantity;
    });
  };

  const handleAddToCart = () => {
    axios.post('http://localhost:3001/api/cart', {
      product_id: product.id,
      image: product.image,
      productname: product.productname,
      price: product.price,
      quantity: quantity,
    })
    .then(() => {
      alert('Product added to cart!');
      // Navigate to the CartPage after adding to cart
      navigate('/cart');  // This will route to the CartPage
    })
    .catch((err) => console.error('Error adding to cart:', err));
  };

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div style={{ padding: '40px', backgroundColor: '#f4f4f9', minHeight: '100vh' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>{product.productname}</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img
            src={product.image}
            alt={product.productname}
            style={{
              width: '300px',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#555' }}>Price: ₹{product.price}</p>
        {/* <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
          <button
            style={{ padding: '5px 10px', margin: '0 10px', backgroundColor: '#ccc', borderRadius: '5px' }}
            onClick={() => handleQuantityChange('decrement')}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            style={{ padding: '5px 10px', margin: '0 10px', backgroundColor: '#ccc', borderRadius: '5px' }}
            onClick={() => handleQuantityChange('increment')}
          >
            +
          </button>
        </div> */}
        <button
          style={{
            marginTop: '30px',
            padding: '10px 20px',
            fontSize: '16px',
            color: '#fff',
            backgroundColor: '#4CAF50',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
