
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600">SwiftCard</div>
      <input
        type="text"
        placeholder=" Search for Products, Brands and More "
        className="flex-1 mx-3 p-2 border border-gray-400 rounded bg-gray-100 shadow-inner "
      />
      <nav className="flex space-x-4">
        <Link to="/" className="px-4 py-2">Home</Link>
        <Link to="/about" className="px-4 py-2">About</Link>
        <Link to="/contact" className="px-4 py-2">Contact</Link>
        <button className="px-4 py-2">Login</button>
        <button className="px-4 py-2">Cart</button>
        <button className="px-4 py-2">Become a Seller</button>
      </nav>
    </header>
  );
};

export default Header;
