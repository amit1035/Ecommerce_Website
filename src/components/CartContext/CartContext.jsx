// src/components/CartContext/CartContext.jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [couponsApplied, setCouponsApplied] = useState(0);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    // Update total price and other states as needed
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) => prevItems.filter(item => item !== itemToRemove));
    // Update total price and other states as needed
  };

  const saveForLater = (itemToSave) => {
    // Implement saving for later logic
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, saveForLater, totalPrice, totalDiscount, couponsApplied }}>
      {children}
    </CartContext.Provider>
  );
};
