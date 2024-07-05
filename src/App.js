// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import HeadPhones from './Components/HeadPhones';
import Speakers from './Components/Speakers';
import EarPhones from './Components/EarPhones';
import ProductDetail from './Components/CATEGORIES/ProductHeadphones';
import ProductSpeaker from './Components/CATEGORIES/ProductSpeaker';
import EarphoneProduct from './Components/CATEGORIES/EarphoneProduct';
import { CartProvider } from './Components/Contexts/Cartcontext';
import Cart from './Components/Cart';
import CheckoutForm from './Components/CheckoutForm';




function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <CartProvider>

      <Router>
      <Nav />
        <Routes>
        
          <Route path="/home" element={<Home />} />
          <Route path="/headphones" element={<HeadPhones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<EarPhones />} />
          <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route  path="/speaker/:id" element={< ProductSpeaker addToCart={addToCart} /> }/>
          <Route  path="/earphone/:id" element={<EarphoneProduct addToCart={addToCart} /> }/>
          <Route  path='./cart' element={<Cart/>}/>
          <Route  path='./Checkout' element={<CheckoutForm />}/>
        </Routes>
      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
