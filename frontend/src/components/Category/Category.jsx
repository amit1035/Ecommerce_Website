import React, { useRef, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_API_URL;

const Category = () => {
  const [categories, setCategories] = useState([]);
  const containerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const navigate = useNavigate();

  // Fetch categories from backend
  useEffect(() => {
    if (!BASE_URL) {
      console.error("BASE_URL is not defined. Check your .env file.");
      return;
    }

    fetch(`${BASE_URL}/api/categories`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Scroll button visibility
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setShowLeftButton(container.scrollLeft > 0);
      setShowRightButton(container.scrollLeft < container.scrollWidth - container.clientWidth - 1);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => container.removeEventListener("scroll", handleScroll);
  }, [categories]);

  const scrollLeft = () => containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  const scrollRight = () => containerRef.current.scrollBy({ left: 200, behavior: "smooth" });

  const handleCategoryClick = (categoryName) => navigate(`/category/${categoryName}`);

  if (categories.length === 0) {
    return <p className="text-center py-4">No categories available.</p>;
  }

  return (
    <div className="relative flex items-center mt-3 bg-gray-100 py-2 px-2 space-x-4">
      <div className="relative w-full">
        <div
          ref={containerRef}
          className="flex overflow-x-auto space-x-6 py-3 px-4 scroll-smooth"
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-gray-400 overflow-hidden">
                <img
                  src={category.image || "/placeholder.png"}
                  alt={category.name || "Category"}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-800 text-center mt-2">{category.name}</p>
            </div>
          ))}
        </div>

        {showLeftButton && (
          <div className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2">
            <button
              onClick={scrollLeft}
              className="bg-yellow-500 text-black font-bold py-1 md:py-2 px-3 md:px-4 rounded-full"
            >
              <FaArrowLeft />
            </button>
          </div>
        )}

        {showRightButton && (
          <div className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2">
            <button
              onClick={scrollRight}
              className="bg-yellow-500 text-black font-bold py-1 md:py-2 px-3 md:px-4 rounded-full"
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
