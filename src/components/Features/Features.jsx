import React from 'react';

const Features = () => {
  return (
    <div className="flex justify-around py-10 bg-white">
      <div className="flex flex-col items-center">
        <img src="/Images/first.jpg" alt="Affordable Prices" className="h-16" />
        <p className="text-lg font-bold">Affordable Prices</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="/Images/logo.jpeg" alt="Good Quality" className="h-16" />
        <p className="text-lg font-bold">Good Quality</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="/Images/jewellers.jpg" alt="Free Delivery" className="h-16" />
        <p className="text-lg font-bold">Free Delivery</p>
      </div>
    </div>
  );
};

export default Features;
