import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BASE_URL = process.env.REACT_APP_API_URL;

const promotions = [
  {
    image: `${BASE_URL}/images/third.avif`,
    title: "Time to Save Big is",
    price: "From ₹149",
    description: "Best-Selling Wall Clocks",
  },
  {
    image: `${BASE_URL}/images/first.jpg`,
    title: "Step Out in Trendy Flats",
    price: "From ₹199",
    description: "High in Fashion & Comfort",
  },
  {
    image: `${BASE_URL}/images/second.avif`,
    title: "Step Out in Trendy Flats",
    price: "From ₹99",
    description: "High in Fashion & Comfort",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const touchStartXRef = useRef(null);

  // Arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrevClick();
      else if (e.key === "ArrowRight") handleNextClick();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto slider
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % promotions.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  // Swipe support
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (diff > 50) handleNextClick(); // swipe left
    else if (diff < -50) handlePrevClick(); // swipe right
  };

  const handlePrevClick = () => {
    setCurrentIndex((prev) => (prev - 1 + promotions.length) % promotions.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prev) => (prev + 1) % promotions.length);
  };

  return (
    <div
      className="relative flex flex-col md:flex-row w-full h-auto md:h-[400px] overflow-hidden select-none bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Left - Image */}
      <div className="w-full md:w-1/2 h-[200px] sm:h-[250px] md:h-auto relative overflow-hidden">
        <img
          key={promotions[currentIndex].image}
          src={promotions[currentIndex].image}
          alt={promotions[currentIndex].title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out opacity-100"
          style={{ animation: "fadeInImage 0.7s ease-in-out" }}
        />
      </div>

      {/* Right - Text */}
      <div className="w-full md:w-1/2 relative flex flex-col justify-center items-start text-white p-4 sm:p-6 md:px-16 py-4 md:py-0">
        <h2 className="text-base sm:text-lg md:text-4xl font-extrabold mb-2">
          {promotions[currentIndex].title}
        </h2>
        <p className="text-sm sm:text-base md:text-2xl font-bold text-yellow-400 mb-2">
          {promotions[currentIndex].price}
        </p>
        <p className="text-xs sm:text-sm md:text-lg mb-6">
          {promotions[currentIndex].description}
        </p>
        <button className="bg-yellow-500 text-black font-medium py-1.5 px-4 sm:py-3 sm:px-6 rounded-full shadow hover:bg-yellow-400 transition active:scale-95 text-xs sm:text-sm">
          Shop Now
        </button>

        {/* Dots */}
        <div className="mt-6 flex space-x-2 sm:space-x-3">
          {promotions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors duration-300 ${
                idx === currentIndex ? "bg-yellow-400" : "bg-gray-400"
              } hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400`}
            />
          ))}
        </div>
      </div>

      {/* Arrows - only visible on md and up */}
      <button
        onClick={handlePrevClick}
        aria-label="Previous promotion"
        className="hidden md:flex absolute top-1/2 left-2 -translate-y-1/2 bg-yellow-500 text-black p-2 sm:p-3 rounded-full shadow-lg hover:bg-yellow-400 transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-400 z-30"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={handleNextClick}
        aria-label="Next promotion"
        className="hidden md:flex absolute top-1/2 right-2 -translate-y-1/2 bg-yellow-500 text-black p-2 sm:p-3 rounded-full shadow-lg hover:bg-yellow-400 transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-400 z-30"
      >
        <FaArrowRight />
      </button>

      {/* Fade-in animation */}
      <style>
        {`
          @keyframes fadeInImage {
            from { opacity: 0; transform: translateX(-20px);}
            to { opacity: 1; transform: translateX(0);}
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
