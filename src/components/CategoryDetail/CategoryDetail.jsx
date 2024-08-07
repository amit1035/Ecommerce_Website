import React, { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';

const categoryDetails = {
  'Women Clothing': {
    description: 'A wide range of women clothing including dresses, skirts, and more.',
    products: [
      { name: 'Women Printed kurta', price: '86% off 499', image: '//www.meenabazaar.shop/cdn/shop/files/WhatsAppImage2023-08-09at18.40.20_1_1_.jpegcopy3.jpg?v=1691826547' },
      { name: 'Dupatta', price: '39.99', image:'https://m.media-amazon.com/images/I/91CsJX9kbRL._AC_UY1100_.jpg' },
      { name: 'Trousers', price: '19.99', image:"https://5.imimg.com/data5/SELLER/Default/2020/9/ZN/OV/PQ/27070405/10-80-112822-80519-find-1000-02-1539934386.jpg" },
      { name: 'Women Solid Casual Black Shirt', price: '29.99', image:'https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/d/f/y/l-1021-jia-original-imagggf5d59g5266.jpeg?q=90&crop=false' },
      { name: 'Women Solid Low Cut', price: '39.99',image:'https://rukminim2.flixcart.com/image/850/1000/xif0q/sock/o/h/8/free-5-low-ankle-sting-bee-original-imagjyj66ykemysf.jpeg?q=90&crop=false' },
      { name: 'Cotton Silk Saree', price: '29.99',image:'https://lajreedesigner.com/cdn/shop/files/ShrijiAvadh-SC-126-Purple_4_900x1350_crop_center@2x.jpg?v=1712670595' },
    ]
  },
  'Men Clothing': {
    description: 'A wide range of men clothing including t-shirts, shirts, jeans, and more.',
    products: [
      { name: 'T-Shirt', price: '249', image: '/images/Women-Clothing/first.jpg' },
      { name: 'Shirt', price: '399' },
      { name: 'Jeans', price: '499' },
      { name: 'Lower', price: '149' },
      { name: 'Shirt', price: '399' },
      { name: 'Jeans', price: '499' },
      { name: 'Lower', price: '149' },
      { name: 'Shirt', price: '399' },
      { name: 'Jeans', price: '499' },
      { name: 'Lower', price: '149' },
    ]
  },
  // Add other categories here
};

const CategoryDetail = () => {
  const { name } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

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

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart'); // Navigate to the Cart component
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {category.products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[250px] overflow-hidden"
          >
            {product.image && (
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-50 object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-3">{product.name}</h2>
              <p className="text-gray-700 mb-3 text-lg">{product.price}</p>
              <div className="flex justify-between">
                <button className="bg-blue-500 text-white px-5 py-3 rounded hover:bg-blue-600 transition-colors duration-300 ">
                  Buy Now
                </button>
                <button
                  className="bg-green-500 text-white px-5 py-3 rounded hover:bg-green-600 transition-colors duration-300"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetail;
