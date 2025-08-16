import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBoxOpen, FaHeart, FaSignOutAlt } from 'react-icons/fa';

const UserDropdown = ({ onClose, logout }) => {
  return (
    <nav
      aria-label="User menu"
      className="absolute left-1/2 top-full mt-10 w-48 bg-white border border-gray-300 rounded shadow-lg z-50
                 -translate-x-1/2"
    >
      <ul className="flex flex-col divide-y divide-gray-200">
        <li>
          <Link
            to="/profile"
            className="flex items-center px-4 py-2 hover:bg-blue-100"
            onClick={onClose}
          >
            <FaUser className="mr-2" aria-hidden="true" /> My Profile
          </Link>
        </li>
        <li>
          <Link
            to="/orders"
            className="flex items-center px-4 py-2 hover:bg-blue-100"
            onClick={onClose}
          >
            <FaBoxOpen className="mr-2" aria-hidden="true" /> Orders
          </Link>
        </li>
        <li>
          <Link
            to="/wishlist"
            className="flex items-center px-4 py-2 hover:bg-blue-100"
            onClick={onClose}
          >
            <FaHeart className="mr-2" aria-hidden="true" /> Wishlist
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              logout();
              onClose();
            }}
            className="w-full text-left flex items-center px-4 py-2 text-red-600 hover:bg-red-100"
          >
            <FaSignOutAlt className="mr-2" aria-hidden="true" /> Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default UserDropdown;
