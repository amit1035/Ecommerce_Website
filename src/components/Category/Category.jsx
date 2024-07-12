import React, { useRef } from 'react';

const categories = [
  { name: 'Women Clothing', image: '/Images/first.jpg' },
  { name: 'Men Clothing', image: '/Images/men.jpg' },
  { name: 'Kids Clothing', image: '/Images/kids.jpg' },
  { name: 'Footwear', image: '/Images/footware.jpg' },
  { name: 'Jewellery', image: '/Images/jewellers.jpg' },
  { name: 'Jackets', image: '/Images/jackets.jpg' },
  { name: 'T-shirt', image: '/Images/tshirt.jpg' },
  { name: 'Jeans', image: 'https://via.placeholder.com/50x50?text=Jeans' },
  { name: 'Sunglasses', image: 'https://via.placeholder.com/50x50?text=Sunglasses' },
  { name: 'Home Decor', image: 'https://via.placeholder.com/50x50?text=Home+Decor' },
  { name: 'Watches', image: 'https://via.placeholder.com/50x50?text=Watches' },
  { name: 'Home Furnishing', image: 'https://via.placeholder.com/50x50?text=Furnishing' },
  { name: 'Toys', image: 'https://via.placeholder.com/50x50?text=Toys' },
  { name: 'Bluetooth Speakers', image: 'https://via.placeholder.com/50x50?text=Speakers' },
  { name: 'Kitchen Storage & Containers', image: 'https://via.placeholder.com/50x50?text=Kitchen' },
];

const Category = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -100, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 10, behavior: 'smooth' });
  };

  return (
    <div className="relative flex items-center mt-3 bg-gray-100 py-4 px-4 space-x-4">
      <div className="relative w-full">
        {/* Categories Container */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto space-x-6 py-3 px-4 scroll-smooth"
          style={{ scrollBehavior: 'smooth' }}
        >
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center cursor-pointer">
              <div className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-gray-400">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full m-4 rounded-full object-cover "
                />
              </div>
              <p className="text-sm text-gray-800 text-center mt-2">{category.name}</p> 
            </div>
          ))}
        </div>
        
        {/* Scroll Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-l-lg  text-xl z-10"
        >
          &lt;
        </button>

        {/* Scroll Right Button */}
        <button 
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-l-lg text-xl z-10"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Category;
