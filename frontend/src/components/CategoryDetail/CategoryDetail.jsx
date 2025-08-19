import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const CategoryDetail = () => {
  const { name } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);

  const BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (!name) return;

    document.title = `${name} - SwiftCard`;

    if (!BASE_URL) {
      console.error("BASE_URL is not defined. Check your .env file.");
      return;
    }

    const fetchCategory = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/categories/${name}`);
        if (!res.ok) throw new Error(`Failed to fetch category. Status: ${res.status}`);
        const data = await res.json();
        setCategory(data);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, [name, BASE_URL]);

  const handleAddToCart = (product) => {
    const productWithParsedPrice = {
      ...product,
      price: parseFloat(product.price) || 0, // ensure numeric
      quantity: 1,
    };
    addToCart(productWithParsedPrice);
    navigate("/cart");
  };

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (!category || !category.products) {
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        {category.description || "Category"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {category.products.length > 0 ? (
          category.products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition transform hover:scale-105 bg-white cursor-pointer"
              onClick={() => handleCardClick(product.id)}
            >
              <img
                src={product.image || "/placeholder.png"}
                alt={product.name || "Product"}
                className="w-full h-40 object-cover object-left-top rounded"
              />
              <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
              <div className="flex items-center justify-between mt-1">
                <p className="text-gray-700">₹{product.price}</p>
                <span className="text-yellow-500">⭐ {product.rating || "4.5"}</span>
              </div>
              <div className="mt-3 flex">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                >
                  Add to Cart
                </button>
                <button
                  className="bg-yellow-400 text-black px-4 py-2 rounded ml-2 hover:bg-yellow-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Saved for later", product.name);
                  }}
                >
                  Save for Later
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4">
            No products available in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryDetail;
