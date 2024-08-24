import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const promotions = [
  {
    image: `${process.env.PUBLIC_URL}/images/kurti2.jpg`,
    title: "Time to Save Big is",
    price: "From ₹149",
    description: "Best-Selling Wall Clocks"
  },
  {
    image: `${process.env.PUBLIC_URL}/images/kids.jpg`,
    title: "Step Out in Trendy Flats",
    price: "From ₹118",
    description: "High in Fashion & Comfort"
  },
  {
    image: `${process.env.PUBLIC_URL}/images/Kids2.jpg`,
    title: "Step Out in Trendy Flats",
    price: "From ₹118",
    description: "High in Fashion & Comfort"
  },
  // Add more promotion objects as needed
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promotions.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + promotions.length) % promotions.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % promotions.length);
  };

  const currentPromotion = promotions[currentIndex];

  return (
    <div className="relative bg-rose-500 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center relative p-4 md:p-0">
        <div className="relative w-full md:w-1/2 h-48 md:h-72 mb-4 md:mb-0">
          <img
            src={currentPromotion.image}
            alt={currentPromotion.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-full md:w-1/3 flex flex-col justify-center items-start px-4 md:px-8 bg-rose-500">
          <h1 className="text-xl md:text-3xl font-bold mb-2">{currentPromotion.title}</h1>
          <p className="text-2xl md:text-4xl font-bold mb-4">{currentPromotion.price}</p>
          <p className="text-base md:text-xl mb-4">{currentPromotion.description}</p>
          <button className="bg-yellow-500 text-black font-bold py-1 md:py-2 px-3 md:px-4 rounded-full">
            Shop Now
          </button>
          <div className="flex space-x-2 mt-4">
            {promotions.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
      {currentIndex !== 0 && (
        <div className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2">
          <button onClick={handlePrevClick} className="bg-yellow-500 text-black font-bold py-1 md:py-2 px-3 md:px-4 rounded-full">
            <FaArrowLeft />
          </button>
        </div>
      )}
      {currentIndex !== promotions.length - 1 && (
        <div className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2">
          <button onClick={handleNextClick} className="bg-yellow-500 text-black font-bold py-1 md:py-2 px-3 md:px-4 rounded-full">
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Banner;

