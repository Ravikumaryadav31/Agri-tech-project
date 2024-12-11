import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ProductsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { products } = location.state || { products: [] };

  const handleCardClick = (product) => {
    navigate(`/product-details/${product.id}`, { state: { product } });
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <div
        style={{
          maxWidth: '1200px', // Restrict the maximum width
          margin: '0 auto', // Center the content horizontally
          padding: '0 20px', // Add gap on left and right
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Products</h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)', // Create 2 columns
            gap: '20px',
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: '1px solid #ddd',
                padding: '15px',
                borderRadius: '5px',
                textAlign: 'center',
                cursor: 'pointer',
                backgroundColor: '#fff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
              }}
              onClick={() => handleCardClick(product)}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            >
              <img
                src={product.image.startsWith('http') ? product.image : `https://backend-dxkf.onrender.com/${product.image}`}
                alt={product.productname}
                style={{
                  width: '100%',
                  height: 'auto', // Keep aspect ratio
                  maxHeight: '250px', // Limit height to 250px
                  objectFit: 'contain', // Ensures the image fits inside the container without distortion
                  borderRadius: '5px',
                  marginBottom: '15px', // Adding space between image and text
                }}
                onError={(e) => (e.target.src = 'fallback-image-url.jpg')}
              />
              <h3 style={{ margin: '10px 0', fontSize: '18px', color: '#444' }}>{product.productname}</h3>
              <p style={{ fontWeight: 'bold', color: '#555' }}>Price: ₹{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
