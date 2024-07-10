import React from 'react';

const Banner = () => {
  return (
    <div className="relative bg-purple-500 text-white py-10">
      <img
        src="/Image/banner.jpg"
        alt="Banner"
        className="w-full h-64 object-cover"
      />
      <div className="absolute left-4 bottom-4 space-y-2">
        <h1 className="text-2xl font-bold">Attractive & Stylish</h1>
        <p className="text-lg">From ₹85 - Stay On Time, Stay On Trend</p>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">Shop Now</button>
      </div>
    </div>
  );
};

export default Banner;
