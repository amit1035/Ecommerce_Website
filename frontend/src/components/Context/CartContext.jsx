import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [couponsApplied, setCouponsApplied] = useState(0);

  useEffect(() => {
    const price = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = cartItems.reduce((acc, item) => acc + (item.discount || 0) * item.quantity, 0);
    setTotalPrice(price);
    setTotalDiscount(discount);
    setCouponsApplied(0); // reset coupons, if needed
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id && cartItem.size === item.size
      );

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id && cartItem.size === item.size
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevItems, item];
      }
    });
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.id === itemToRemove.id && item.size === itemToRemove.size)
      )
    );
  };

  const increaseQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === item.id && cartItem.size === item.size
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decreaseQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === item.id &&
        cartItem.size === item.size &&
        cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
