// src/components/footer/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-6">
          {/* About SwiftCard */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-lg font-bold mb-2">About SwiftCard</h2>
            <p className="text-sm md:text-base">
              SwiftCard offers a seamless shopping experience with a wide range of
              products, secure transactions, and exceptional customer service. Your
              satisfaction is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-lg font-bold mb-2">Quick Links</h2>
            <ul className="text-sm md:text-base space-y-1">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-lg font-bold mb-2">Customer Service</h2>
            <ul className="text-sm md:text-base space-y-1">
              <li>
                <a href="/shipping" className="text-gray-400 hover:text-white">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="/returns" className="text-gray-400 hover:text-white">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="/support" className="text-gray-400 hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-lg font-bold mb-2">Stay Connected</h2>
            <p className="text-sm md:text-base">
              Follow us on our social media platforms to stay updated with the
              latest news and offers.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-10 border-t border-gray-700 pt-5">
        <p className="text-sm md:text-base">
          &copy; 2025 Amit Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
