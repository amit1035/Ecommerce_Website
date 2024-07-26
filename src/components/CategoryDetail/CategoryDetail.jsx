import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const categoryDetails = {
  'Women Clothing': {
    description: 'A wide range of women clothing including dresses, skirts, and more.',
    products: [
     { name: 'Women printed kurta', price: '86% off 499',
       image:'//www.meenabazaar.shop/cdn/shop/files/WhatsAppImage2023-08-09at18.40.20_1_1_.jpegcopy3.jpg?v=1691826547'},
      { name: 'Jeans', price: '39.99' },
      { name: 'Kids Clothing', price: '29.99' },
      { name: 'Skirt', price: '19.99' },
      { name: 'Jeans', price: '39.99' },
      { name: 'Kids Clothing', price: '29.99' },
      { name: 'Skirt', price: '19.99' },
      
    ],
  },















  'Men Clothing':{
    describe:'Awide range of men clothing including',
    products: [
      {
        name:'tshirt',price :'249',
        image:'/images/Women-Clothing/first.jpg',
      },
      {name : 'Shirt',price:'399' },
      {name: 'jeans', price:'499' },
      {name: 'Lower',price:'149'},
      {name : 'Shirt',price:'399' },
      {name: 'jeans', price:'499' },
      {name: 'Lower',price:'149'},
      {name : 'Shirt',price:'399' },
      {name: 'jeans', price:'499' },
      {name: 'Lower',price:'149'},
      
    ],
  },
  // Add other categories here
};

const CategoryDetail = () => {
  const { name } = useParams();

  useEffect(() => {
    console.log('Category Name:', name);
    console.log('Category Data:', categoryDetails[name]);
    if (name) {
      document.title = `${name} - SwiftCard`;
    }
  }, [name]);

  const category = categoryDetails[name];

  if (!category) {
    return <p>Category not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{name}</h1>
      <p className="text-gray-800 text-center mb-10">{category.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {category.products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[250px]"
          >

          
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 object-cover rounded-t-lg mb-2 shadow-lg "
              />
            )}



            <h2 className="text-xl font-semibold mb-3">{product.name}</h2>
            <p className="text-gray-700 mb-3 text-lg">{product.price}</p>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white px-5 py-3 rounded hover:bg-blue-600 transition-colors duration-300">
                Buy Now
              </button>
              <button className="bg-green-500 text-white px-5 py-3 rounded hover:bg-green-600 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetail;