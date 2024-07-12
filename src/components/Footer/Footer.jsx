// src/components/footer/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6">
          <h2 className="text-lg font-bold mb-2">About SwiftCard</h2>
          <p>SwiftCard offers a seamless shopping experience with a wide range of products, secure transactions, and exceptional customer service. Your satisfaction is our priority.</p>
        </div>
        <div className="w-full md:w-1/4 mb-6">
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul>
            <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
            <li><a href="/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
            <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6">
          <h2 className="text-lg font-bold mb-2">Customer Service</h2>
          <ul>
            <li><a href="/shipping" className="text-gray-400 hover:text-white">Shipping & Delivery</a></li>
            <li><a href="/returns" className="text-gray-400 hover:text-white">Returns & Exchanges</a></li>
            <li><a href="/support" className="text-gray-400 hover:text-white">Support</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6">
          <h2 className="text-lg font-bold mb-2">Stay Connected</h2>
          <p>Follow us on our social media platforms to stay updated with the latest news and offers.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 border-t border-gray-700 pt-5">
        <p>&copy; 2024 SwiftCard. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
