import React, { useRef, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const containerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const navigate = useNavigate();


  
// Fetch categories from backend
useEffect(() => {
  fetch(`${process.env.REACT_APP_API_URL}/api/categories`)
    .then((res) => res.json())
    .then((data) => setCategories(data))
    .catch((error) => console.error("Error fetching categories:", error));
}, []);


  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      setShowLeftButton(container.scrollLeft > 0);
      setShowRightButton(container.scrollLeft < container.scrollWidth - container.clientWidth);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollLeft = () => containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  const scrollRight = () => containerRef.current.scrollBy({ left: 200, behavior: "smooth" });

  const handleCategoryClick = (categoryName) => navigate(`/category/${categoryName}`);

  return (
    <div className="relative flex items-center mt-3 bg-gray-100 py-2 px-2 space-x-4">
      <div className="relative w-full">
        <div ref={containerRef} className="flex overflow-x-auto space-x-6 py-3 px-4 scroll-smooth">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center cursor-pointer" onClick={() => handleCategoryClick(category.name)}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-gray-400">
                <img src={category.image} alt={category.name} className="w-full h-full m-4 rounded-full object-cover" />
              </div>
              <p className="text-sm text-gray-800 text-center mt-2">{category.name}</p>
            </div>
          ))}
        </div>

        {showLeftButton && (
          <div className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2">
            <button onClick={scrollLeft} className="bg-yellow-500 text-black font-bold py-1 md:py-2 px-3 md:px-4 rounded-full">
              <FaArrowLeft />
            </button>
          </div>
        )}

        {showRightButton && (
          <div className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2">
            <button onClick={scrollRight} className="bg-yellow-500 text-black font-bold py-1 md:py-2 px-3 md:px-4 rounded-full">
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
