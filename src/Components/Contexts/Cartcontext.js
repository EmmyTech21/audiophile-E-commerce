import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        prevCart.push({ ...product });
      }
      return [...prevCart];
    });

    setTotal((prevTotal) => prevTotal + product.price * product.quantity);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const productToRemove = prevCart.find((product) => product.id === productId);
      setTotal((prevTotal) => prevTotal - productToRemove.price * productToRemove.quantity);
      return prevCart.filter((product) => product.id !== productId);
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((product) => {
        if (product.id === productId) {
          setTotal((prevTotal) => prevTotal - product.price * product.quantity + product.price * quantity);
          return { ...product, quantity };
        }
        return product;
      });
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, total, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
