import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [couponsApplied, setCouponsApplied] = useState(0);

  useEffect(() => {
    const price = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(price);

    const discount = cartItems.reduce((acc, item) => acc + (item.discount || 0) * item.quantity, 0);
    setTotalDiscount(discount);

    setCouponsApplied(0); // Customize based on your coupon logic

    console.log('Total Price:', price); // Debugging
    console.log('Cart Items:', cartItems); // Debugging
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter(item => item.id !== itemToRemove.id)
    );
  };

  const increaseQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  };

  const decreaseQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems.map(cartItem =>
        cartItem.id === item.id && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
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
