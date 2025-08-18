import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import UserDropdown from "../Login/UserDropdown";
import { useAuth } from "../Login/Auth/AuthContext";
import { CartContext } from "../Context/CartContext";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const searchRef = useRef(null);
  const userMenuRef = useRef(null);

  const { user, logout } = useAuth();
  const { totalQuantity } = useContext(CartContext);
  const BASE_URL = process.env.REACT_APP_API_URL;


 // 🔹 Fetch all products for search
useEffect(() => {
  fetch(`${BASE_URL}/api/products`)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch products");
      return res.json();
    })
    .then((data) => {
      setProducts(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setError("Failed to load products");
      setLoading(false);
    });
}, []);


  // 🔹 Search filter logic with debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm.trim() === "") {
        setFilteredProducts([]);
        setShowDropdown(false);
        return;
      }

      const filtered = products.filter(
        (product) =>
          typeof product.name === "string" &&
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredProducts(filtered);
      setShowDropdown(filtered.length > 0);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchTerm, products]);

  // 🔹 Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !searchRef.current?.contains(event.target) &&
        !userMenuRef.current?.contains(event.target)
      ) {
        setShowDropdown(false);
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔹 Handle product selection
  const handleProductClick = (product) => {
    if (!product.id) return;
    navigate(`/products/${product.id}`);
    setShowDropdown(false);
    setSearchTerm("");
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white shadow-md relative">
      {/* 🔹 Logo */}
      <div className="text-2xl font-bold text-blue-600 ml-0 sm:ml-12">
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
          SwiftCard
        </Link>
      </div>

      {/* 🔹 Search Bar */}
      <div
        className="flex w-full sm:w-1/2 items-center mx-1 my-1 sm:my-0 relative"
        ref={searchRef}
      >
        <input
          type="text"
          placeholder={
            loading
              ? "Loading products..."
              : error
              ? "Error loading products"
              : "Search for Products, Brands, and More"
          }
          className="w-full h-9 p-2 border border-gray-400 rounded-md bg-gray-100 shadow-inner focus:outline-none focus:border-blue-600 transition duration-300 hover:shadow-lg placeholder-gray-400 placeholder-opacity-80"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => {
            if (searchTerm.trim() !== "") setShowDropdown(true);
          }}
          disabled={loading || error}
          spellCheck={false}
        />

        {/* 🔹 Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-blue-600 focus:outline-none ml-2 sm:hidden"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* 🔹 Dropdown Suggestions */}
        {showDropdown && (
          <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md max-h-48 overflow-y-auto z-50 shadow-xl scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <li
                  key={product.id}
                  className="px-4 py-2 cursor-pointer hover:bg-blue-100 transition-colors duration-200 select-none"
                  onClick={() => handleProductClick(product)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleProductClick(product);
                    }
                  }}
                >
                  {product.name}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500 select-none">
                No available products found
              </li>
            )}
          </ul>
        )}
      </div>

      {/* 🔹 Navigation & User */}
      <nav
        className={`flex-col sm:flex-row items-center sm:space-x-4 ${
          isMobileMenuOpen ? "flex" : "hidden"
        } sm:flex`}
      >
        <div className="relative inline-block" ref={userMenuRef}>
          {user ? (
            <>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="px-4 py-2 text-blue-600 hover:bg-gray-200 rounded-md"
              >
                Hi, {user.displayName || user.email}
              </button>
              {showUserMenu && (
                <UserDropdown onClose={() => setShowUserMenu(false)} logout={logout} />
              )}
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2 text-blue-600 hover:bg-gray-200 rounded-md"
            >
              Login
            </Link>
          )}
        </div>

        {/* 🔹 Cart */}
        <Link
          to="/cart"
          onClick={() => setIsMobileMenuOpen(false)}
          className="relative flex items-center px-4 py-2 text-blue-600 hover:bg-gray-200 rounded-md"
        >
          <FaShoppingCart className="mr-2 text-2xl" />
          {totalQuantity > 0 && (
            <span className="absolute -top-4 left-4 px-2 py-1 text-xs font-bold text-white bg-red-600 rounded-full">
              {totalQuantity}
            </span>
          )}
          Cart
        </Link>

        {/* 🔹 Become a Seller */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="px-4 py-2 text-blue-600 hover:bg-gray-200 rounded-md"
        >
          Become a Seller
        </button>
      </nav>
    </header>
  );
};

export default Header;
