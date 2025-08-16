import React, { useEffect, useState } from 'react';
import { FaFire } from "react-icons/fa";
import BannerCard from './layout/banner_card';
import ClearanceCard from './layout/clearance_card';

const BASE_URL = 'http://localhost:4000';

const Banner = () => {
  const [bannerItems, setBannerItems] = useState([]);
  const [clearanceItems, setClearanceItems] = useState([]);

  useEffect(() => {
    // Fetch both banner & clearance data in one call
    fetch(`${BASE_URL}/api/home-data`)
      .then(res => res.json())
      .then(data => {
        setBannerItems(data.banners);
        setClearanceItems(data.clearance);
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="relative bg-white text-black py-10 animate-fade-in">
      {/* Banner Grid Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bannerItems.map((item, idx) => (
            <div
              key={idx}
              className="transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <BannerCard
                title={item.title}
                image={item.image} // Already full URL from backend
                price={item.price}
                link={item.link}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dhamaka Deals Heading */}
      <div className="w-full max-w-4xl mx-auto p-4 mt-12">
        <h1
          tabIndex={0}
          className="relative text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent text-center p-6 rounded-full flex items-center justify-center gap-4 select-none cursor-pointer shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-8 focus:ring-teal-300 focus:ring-opacity-60 animate-scale-pulse"
          aria-label="Super Dhamaka Deals - Exciting Offers"
        >
          Super Dhamaka Deals
          <FaFire
            className="text-yellow-400 drop-shadow-xl transition-transform duration-700 ease-in-out hover:animate-bounce hover:text-yellow-300 focus:animate-bounce focus:text-yellow-300"
            size={48}
            aria-hidden="true"
          />
        </h1>
      </div>

      {/* Clearance Sale Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
        {clearanceItems.map((item, idx) => (
          <div
            key={idx}
            className="transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <ClearanceCard
              title={item.title}
              image={item.image} // Already full URL from backend
              price={item.price}
              link={item.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
