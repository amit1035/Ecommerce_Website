import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    saveForLater,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    totalDiscount,
  } = useContext(CartContext);
  const navigate = useNavigate();

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
                <img
                  src={item.image || 'https://via.placeholder.com/150'}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />;
              </div>
              <div className="flex-grow">
                <h2 className="text-xl">{item.name}</h2>
                <p className="text-gray-700">Size: {item.size || 'M'}</p>
                <p className="text-lg">₹{item.price * item.quantity}</p>

                <div className="flex items-center mt-2">
                  <button
                    className="bg-gray-300 text-black px-2 py-1 rounded mr-2 hover:bg-gray-400"
                    onClick={() => decreaseQuantity(item)}
                  >
                    −
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    className="bg-gray-300 text-black px-2 py-1 rounded ml-2 hover:bg-gray-400"
                    onClick={() => increaseQuantity(item)}
                  >
                    +
                  </button>
                </div>

                <div className="mt-2">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 hover:bg-yellow-600"
                    onClick={() => saveForLater(item)}
                  >
                    Save for Later
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Price Details Section */}
          <div className="border-t mt-4 pt-4">
            <h2 className="text-xl font-semibold mb-4">Price Details</h2>
            <div className="flex justify-between mb-2">
              <span>Price ({cartItems.length} item{cartItems.length > 1 ? 's' : ''})</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount</span>
              <span>-₹{totalDiscount}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Delivery Charges</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between mb-2 font-bold">
              <span>Total Price</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="mt-4">
              <p className="text-green-600">
                You will save ₹{totalDiscount} on this order
              </p>
            </div>
            <div className="flex justify-end mt-6">
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                onClick={() => navigate('/placeorder')}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
