import React from 'react';

const Features = () => {
  return (
    <div className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-around">
        <div className="w-full md:w-1/3 mb-6 p-4">
          <div className="flex flex-col items-center">
            <img src="https://example.com/first.jpg" alt="Affordable Prices" className="h-20 mb-4" />
            <p className="text-xl font-bold">Affordable Prices</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 mb-6 p-4">
          <div className="flex flex-col items-center">
            <img src="https://example.com/logo.jpeg" alt="Good Quality" className="h-20 mb-4" />
            <p className="text-xl font-bold">Good Quality</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 mb-6 p-4">
          <div className="flex flex-col items-center">
            <img src="https://example.com/jewellers.jpg" alt="Free Delivery" className="h-20 mb-4" />
            <p className="text-xl font-bold">Free Delivery</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
