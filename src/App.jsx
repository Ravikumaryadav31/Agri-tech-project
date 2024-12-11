import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopList from './components/shoplist';
import ProductsPage from './components/products';
import Login from './components/login';

import FisrtPage from './components/fisrtpage';


import About from './components/about';
import CartPage from './components/cardpage';
import ProductDetailsPage from './components/productdetailspage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FisrtPage />} /> {/* Default page */}
        <Route path="/shoplist" element={<ShopList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/about" element={< About/>} />
        
        <Route path="/products/:shopName" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
