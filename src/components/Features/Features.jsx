import React from 'react';

const Banner = () => {
  return (
    <div className="relative bg-rose-600 text-white py-3">
      <div className="container mx-auto flex justify-center items-center relative">
        <div className="relative w-full h-64 md:h-72 ">
          <img
            src="https://cdn.firstcry.com/education/2023/01/31204054/Teaching-Process-Art-To-Kids-Benefits-and-Activities.jpg"
            alt="Promotional Image"
            className="w-50 h-full object-cover rounded-none"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 p-4">
            <h1 className="text-4xl font-bold mb-4 text-left">Step Out in Trendy Flats</h1>
            <p className="text-2xl mb-2 text-center">From ₹118</p>
            <p className="text-xl mb-4 text-center">High in Fashion & Comfort</p>
            <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
