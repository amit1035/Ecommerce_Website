import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600 ml-0 sm:ml-12">
        <Link to="/">SwiftCard</Link>
      </div>

      <div className="flex w-full sm:w-1/2 items-center mx-1 my-1 sm:my-0">
        <input
          type="text"
          placeholder="Search for Products, Brands, and More"
          className="w-full h-9 p-1 border border-gray-400 rounded-md bg-gray-100 shadow-inner"
        />
        <button onClick={toggleMobileMenu} className="text-blue-600 focus:outline-none ml-2 sm:hidden">
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <nav className={`flex-col sm:flex-row items-center sm:space-y-0 sm:space-x-4 ${isMobileMenuOpen ? 'flex' : 'hidden'} sm:flex`}>
        <Link to="/login" className="w-full text-center px-4 py-2 text-blue-600 hover:bg-gray-200 rounded-md">Login</Link>
        <button className="w-full text-center px-4 py-2 text-blue-600 hover:bg-gray-200 rounded-md">Cart</button>
        <button className="w-full text-center px-4 py-2 text-blue-600 hover:bg-gray-200 rounded-md">Become a Seller</button>
      </nav>
    </header>
  );
};

export default Header;
