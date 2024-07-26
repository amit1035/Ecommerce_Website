import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const categories = [
  { name: 'Women Clothing', image: `${process.env.PUBLIC_URL}/images/women.jpg` },
  { name: 'Men Clothing', image: `${process.env.PUBLIC_URL}/images/men.jpg` },
  { name: 'Kids Clothing', image: `${process.env.PUBLIC_URL}/images/kids.jpg` },
  { name: 'Footwear', image: `${process.env.PUBLIC_URL}/images/footware.jpeg` },
  { name: 'Jewellery', image: `${process.env.PUBLIC_URL}/images/jewellers.jpg` },
  { name: 'Jackets', image: `${process.env.PUBLIC_URL}/images/jackets.jpg` },
  { name: 'T-shirt', image: `${process.env.PUBLIC_URL}/images/tshirt.jpg` },
  { name: 'Jeans', image: 'https://www.tistabene.com/cdn/shop/files/MJS-0306C.jpg?v=1700287577&width=1080' },
  { name: 'Sunglasses', image: 'https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg' },
  { name: 'Jeans', image: 'https://www.tistabene.com/cdn/shop/files/MJS-0306C.jpg?v=1700287577&width=1080' },
  { name: 'Sunglasses', image: 'https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg' },
  { name: 'Home Decor', image: 'https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png' },
  { name: 'Watches', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800' },
  { name: 'Home Furnishing', image: 'https://dukaan.b-cdn.net/700x700/webp/upload_file_service/c153799b-2716-4a2d-86a6-e8e4c2efc027/whatsapp-image-2023-02-19-at-11-46-23-pm.jpeg' },
  { name: 'Toys', image: 'https://images.indianexpress.com/2019/09/toys.jpg?w=414' },
  { name: 'Bluetooth Speakers', image: 'https://images-cdn.ubuy.co.in/64f8fabde01bf74c341c95f7-portable-bluetooth-speaker-wireless.jpg' },
  { name: 'Kitchen Storage & Containers', image: 'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/04/11175424/Cover-1.jpg' },
];

const Category = () => {
  const containerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      setShowLeftButton(container.scrollLeft > 0);
      setShowRightButton(container.scrollLeft < container.scrollWidth - container.clientWidth);
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);




  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName}`); // Navigate to the category detail page
  };

  return (
    <div className="relative flex items-center mt-3 bg-gray-100 py-2 px-2 space-x-4">
      <div className="relative w-full">
        <div
          ref={containerRef}
          className="flex overflow-x-auto space-x-6 py-3 px-4 scroll-smooth"
        >
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleCategoryClick(category.name)} // Handle click to navigate
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-gray-400">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full m-4 rounded-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-800 text-center mt-2">{category.name}</p>
            </div>
          ))}
        </div>





        {showLeftButton && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-cyan-400 rounded-r-lg text-xl z-10"
          >
            &lt;
          </button>
        )}

        {showRightButton && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-cyan-400 rounded-l-lg text-xl z-10"
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Category;
