import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import User from './Pages/User';
import ProductDetails1 from './Pages/ProductDetails1';
import ProductDetails2 from './Pages/ProductDetails2';
import ProductDetails3 from './Pages/ProductDetails3';
import Cart from './Pages/Cart';

function App() {
  return (
    <Router>
      <div className='body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/product-details1/:prodId" element={<ProductDetails1 />} />
          <Route path="/product-details2/:prodId" element={<ProductDetails2 />} />
          <Route path="/product-details3/:prodId" element={<ProductDetails3 />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;