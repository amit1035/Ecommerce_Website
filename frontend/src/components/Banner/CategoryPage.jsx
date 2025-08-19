import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { name } = useParams(); // URL will have category slug
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (!BASE_URL) {
      console.error("BASE_URL is not defined. Check your .env file.");
      return;
    }

    let isMounted = true; // prevent state updates if unmounted
    setLoading(true);

    // Correct endpoint: fetch category by slug, then extract products
    fetch(`${BASE_URL}/api/categories/${name}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        if (isMounted) {
          setProducts(data.products || []);
          setLoading(false);
        }
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false; // cleanup
    };
  }, [name, BASE_URL]);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (products.length === 0) {
    return <p>No products found for this category.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{name} Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-2"
            />
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-gray-700">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
