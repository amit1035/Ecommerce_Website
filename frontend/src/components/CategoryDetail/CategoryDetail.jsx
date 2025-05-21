import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const CategoryDetail = () => {
  const { name } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    if (name) {
      document.title = `${name} - SwiftCard`;

      // Fetch category details from the backend
      fetch(`http://localhost:4000/api/categories/${name}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched Data:", data);
          setCategory(data);
        })
        .catch((error) => console.error("Error fetching category:", error));
    }
  }, [name]);

  // Ensure category is valid and has products before rendering
  if (!category || !category.products) {
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  }

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{category?.description || "Category"}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {category.products.length > 0 ? (
          category.products.map((product) => (
            <div key={product.id} className="border rounded-lg shadow-lg p-4">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-700">₹{product.price}</p>
              <button
                className="bg-green-500 text-white px-5 py-3 rounded mt-2 hover:bg-green-600"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4">No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryDetail;
