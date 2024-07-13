import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600 ml-12">
        <Link to="/">SwiftCard</Link>
      </div>

      <input
        type="text"
        placeholder=" Search for Products, Brands and More "
        className="w-1/2 h-9 mx-1 p-1 border border-gray-400 rounded-md bg-gray-100 shadow-inner mr-20 "
      />
      <nav className="flex space-x-4">
      <Link to="/login" className="px-4 py-2">Login</Link>
        <button className="px-4 py-2">Cart</button>
        <button className="px-4 py-2">Become a Seller</button>
      </nav>
    </header>
  );
};

export default Header;
