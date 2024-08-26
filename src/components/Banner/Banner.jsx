import React from 'react';
import { FaGifts } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <div className="relative bg-white text-white py-10">
      <div className="container mx-auto px-4">
        {/* Banner Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* Rectangle Box 1 for T-shirt */}
          <Link to="/category/T-shirt">
         <div className="relative w-full h-72 rounded-lg shadow-lg">
       <img 
      src={`${process.env.PUBLIC_URL}/images/img.jpg`} 
      alt="Banner" 
      className="w-full h-full object-cover object-top rounded-lg" 
    />
    <div className="absolute bottom-0 left-0 w-full bg-white p-4 rounded-b-lg">
      <p className="font-bold text-black text-center text-xl">T-shirt <br/>from ₹99</p>
    </div>
  </div>
</Link>

          
          {/* Rectangle Box 2 */}
          <div className="relative w-full h-72 rounded-lg shadow-lg">
            <img 
              src={`${process.env.PUBLIC_URL}/images/Mobile.jpg`} 
              alt="Banner" 
              className="w-full h-full object-cover rounded-lg" 
            />
            <div className="absolute bottom-0 left-0 w-full bg-white  p-4 rounded-b-lg">
              <p className="font-bold text-black text-center text-xl">Mobile Phones <br/>from ₹10,999</p>
            </div>
          </div>


          {/* Rectangle Box 3 */}
          <div className="relative w-full h-72 rounded-lg shadow-lg">
            <img 
              src={`${process.env.PUBLIC_URL}/images/kids.jpg`} 
              alt="Banner" 
              className="w-full h-full object-cover rounded-lg" 
            />
            <div className="absolute bottom-0 left-0 w-full bg-white p-4 rounded-b-lg">
              <p className="font-bold text-black text-center text-xl">Kids' Clothing <br/>from ₹99</p>
            </div>
          </div>



          {/* Rectangle Box 4 */}
          <div className="relative w-full h-72 rounded-lg shadow-lg">
            <img 
              src={`${process.env.PUBLIC_URL}/images/jewellers.jpg`} 
              alt="Banner" 
              className="w-full h-full object-cover rounded-lg" 
            />
            <div className="absolute bottom-0 left-0 w-full bg-white  p-4 rounded-b-lg">
              <p className="font-bold text-black text-center text-xl">Jewellery <br/>from ₹999</p>
            </div>
          </div>


          {/* Rectangle Box 5 */}
          <div className="relative w-full h-72 rounded-lg shadow-lg">
            <img 
              src={`${process.env.PUBLIC_URL}/images/makeup.jpg`} 
              alt="Banner" 
              className="w-full h-full object-cover rounded-lg" 
            />
            <div className="absolute bottom-0 left-0 w-full bg-white  p-4 rounded-b-lg">
              <p className="font-bold text-black text-center text-xl">Makeup <br/>from ₹199</p>
            </div>
          </div>


          {/* Rectangle Box 6 */}
          <div className="relative w-full h-72 rounded-lg shadow-lg">
            <img 
              src={`${process.env.PUBLIC_URL}/images/furnishing.jpg`} 
              alt="Banner" 
              className="w-full h-full object-cover rounded-lg" 
            />
            <div className="absolute bottom-0 left-0 w-full bg-white  p-4 rounded-b-lg">
              <p className="font-bold text-black text-center text-xl">Furnishings <br/>from ₹999</p>
            </div>
          </div>


          {/* Rectangle Box 7 */}
          <div className="relative w-full h-72 rounded-lg shadow-lg">
            <img 
              src={`${process.env.PUBLIC_URL}/images/kitchen.jpg`} 
              alt="Banner" 
              className="w-full h-full object-cover rounded-lg" 
            />
            <div className="absolute bottom-0 left-0 w-full bg-white  p-4 rounded-b-lg">
              <p className="font-bold text-black text-center text-xl">Kitchenware <br/>from ₹999</p>
            </div>
          </div>


          {/* Rectangle Box 8 */}
          <div className="relative w-full h-72 rounded-lg shadow-lg">
            <img 
              src={`${process.env.PUBLIC_URL}/images/electronics.jpg`} 
              alt="Banner" 
              className="w-full h-full object-cover rounded-lg" 
            />
            <div className="absolute bottom-0 left-0 w-full bg-white  p-4 rounded-b-lg">
              <p className="font-bold text-black text-center text-xl">Electronics <br/>from ₹999</p>
            </div>
          </div>


          {/* Rectangle Box 9 */}
          <div className="relative w-full h-72 rounded-lg shadow-lg">
            <img 
              src={`${process.env.PUBLIC_URL}/images/toys.jpg`} 
              alt="Banner" 
              className="w-full h-full object-cover rounded-lg" 
            />
            <div className="absolute bottom-0 left-0 w-full bg-white  p-4 rounded-b-lg">
              <p className="font-bold text-black text-center text-xl">Toys<br/>from ₹49</p>
            </div>
          </div>


          {/* Rectangle Box 10 */}
          <div className="relative w-full h-72 rounded-lg shadow-lg">
            <img 
              src={`${process.env.PUBLIC_URL}/images/sport.jpg`} 
              alt="Banner" 
              className="w-full h-full object-cover rounded-lg" 
            />
            <div className="absolute bottom-0 left-0 w-full bg-white  p-4 rounded-b-lg">
              <p className="font-bold text-black text-center text-xl">Sports <br/>from ₹149</p>
            </div>
          </div>


          {/* Rectangle Box 11 */}
          <div className="relative w-full h-72 rounded-lg shadow-lg">
            <img 
              src={`${process.env.PUBLIC_URL}/images/Watches.jpg`} 
              alt="Banner" 
              className="w-full h-full object-cover rounded-lg" 
            />
            <div className="absolute bottom-0 left-0 w-full bg-white  p-4 rounded-b-lg">
              <p className="font-bold text-black text-center text-xl">Watches <br/>from ₹99</p>
            </div>
          </div>


          {/* Rectangle Box 12 */}
          <div className="relative w-full h-72 rounded-lg shadow-lg">
            <img 
              src={`${process.env.PUBLIC_URL}/images/decor.jpg`} 
              alt="Banner" 
              className="w-full h-full object-cover rounded-lg" 
            />
            <div className="absolute bottom-0 left-0 w-full bg-white  p-4 rounded-b-lg">
              <p className="font-bold text-black text-center text-xl">Decoration <br/>from ₹49</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto p-4">
       <h1 className='text-5xl font-bold text-white text-center p-6 bg-pink-600 decoration-pink-600 underline rounded-full flex items-center justify-center m-6'>
        Super Dhamaka Deals
        <FaGifts className="ml-4 text-yellow-400" size={40} />
       </h1>
     </div>

      {/* Clearance Sale Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
        <div className="bg-red-500 p-6 px-10 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold text-white mb-2">Clearance Sale</h2>
          <p className="text-sm text-gray-300">
            Get amazing deals on clearance items.
          </p>
        </div>
        <div className="bg-red-500 p-12 px-20 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold text-white mb-2">Clearance Sale</h2>
          <p className="text-sm text-gray-300">
            Get amazing deals on clearance items.
          </p>
        </div>
        <div className="bg-red-500 p-12 px-20 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold text-white mb-2">Clearance Sale</h2>
          <p className="text-sm text-gray-300">
            Get amazing deals on clearance items.
          </p>
        </div>
        <div className="bg-yellow-500 p-12 px-20 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold text-white mb-2">Clearance Sale</h2>
          <p className="text-sm text-gray-300">
            Get amazing deals on clearance items.
          </p>
        </div>
        <div className="bg-yellow-500 p-12 px-20 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold text-white mb-2">Clearance Sale</h2>
          <p className="text-sm text-gray-300">
            Get amazing deals on clearance items.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
