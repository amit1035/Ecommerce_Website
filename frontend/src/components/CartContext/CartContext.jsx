import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [couponsApplied, setCouponsApplied] = useState(0);

  const updateTotals = (items) => {
    const price = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = items.reduce((acc, item) => acc + (item.discount || 0) * item.quantity, 0);
    setTotalPrice(price);
    setTotalDiscount(discount);
  };

  useEffect(() => {
    updateTotals(cartItems);
    setCouponsApplied(0);
    console.log('Total Price:', totalPrice);
    console.log('Cart Items:', cartItems);
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        const updatedItems = prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        updateTotals(updatedItems);
        return updatedItems;
      } else {
        const updatedItems = [...prevItems, { ...item, quantity: 1 }];
        updateTotals(updatedItems);
        return updatedItems;
      }
    });
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter(item => item.id !== itemToRemove.id);
      updateTotals(updatedItems);
      return updatedItems;
    });
  };

  const increaseQuantity = (item) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      updateTotals(updatedItems);
      return updatedItems;
    });
  };

  const decreaseQuantity = (item) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map(cartItem =>
        cartItem.id === item.id && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      updateTotals(updatedItems);
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
        totalDiscount,
        couponsApplied,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
