// src/components/layout/BannerCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BannerCard = ({ title, image, price, link }) => {
  return (
    <Link to={link || "#"} className="block bg-gray-100 rounded-xl overflow-hidden hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover object-top"
      />
      <div className="p-4 text-black">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600">{price}</p>
      </div>
    </Link>
  );
};

export default BannerCard;
