import React from 'react';
import { Link } from 'react-router-dom';

const ClearanceCard = ({ title, image, price, link }) => (
  <Link to={link} className="block bg-red-500 rounded-lg shadow-lg text-white hover:shadow-xl transition overflow-hidden">
    <div className="w-full h-48">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-top"
      />
    </div>
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-sm text-gray-200">{price}</p>
    </div>
  </Link>
);

export default ClearanceCard;
