// src/components/Cart/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, saveForLater, totalPrice, totalDiscount, couponsApplied } = useContext(CartContext);
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (                  
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="border rounded-lg shadow-lg p-4 mb-4 flex items-center">
              <div className="flex-shrink-0 w-24 h-24 bg-gray-200 mr-4">
                {/* Placeholder for image */}
                <img src={item.image || 'https://via.placeholder.com/150'} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <h2 className="text-xl">{item.name}</h2>
                <p className="text-gray-700">Size: L {item.size}</p>
                <p className="text-lg ">₹{item.price}</p>
                <p className="text-sm text-gray-500">Qty: 1 {item.quantity}</p>
                <div className="mt-2">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 hover:bg-yellow-600 text-center"
                    onClick={() => saveForLater(item)}
                  >
                    Save for later
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-center "
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="border-t mt-4 pt-4">
            <h2 className="text-xl font-semibold mb-4">Price Details</h2>
            <div className="flex justify-between mb-2">
              <span>Price (1 item) </span>
              <span>₹{totalPrice}499</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount</span>
              <span>- ₹{totalDiscount}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Coupons for you</span>
              <span>- ₹{couponsApplied}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Delivery Charges</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total Customer Price</span>
              <span>₹{totalPrice - totalDiscount - couponsApplied}</span>
            </div>
            <div className="mt-4">
              <p className="text-green-600">You will save ₹{totalDiscount + couponsApplied} on this order</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
