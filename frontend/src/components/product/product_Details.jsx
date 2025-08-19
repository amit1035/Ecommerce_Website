import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { CartContext } from "../Context/CartContext";

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    addToCart({
      id: product.id,
      name: product.name || "Product",
      price: parseFloat(product.price) || 0,
      image: product.image || "/images/placeholder.png",
      discount: product.discount || 0,
      quantity,
      size: selectedSize,
    });

    alert(`Added ${quantity} of ${product.name} (Size: ${selectedSize}) to cart!`);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/checkout");
  };

  const onQuantityChange = (e) => {
    const val = parseInt(e.target.value);
    setQuantity(isNaN(val) || val < 1 ? 1 : val);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        <p>Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!product) {
    return <p className="text-center text-lg font-semibold">Product not found.</p>;
  }

  const ratingStars = Math.round(product.rating) || 4;
  const reviewCount = product.reviews || 120;

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <p className="text-sm text-gray-500 mb-2">
        Home / Category / <span className="text-black font-semibold">{product.name}</span>
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <img
            src={product.image || "/images/placeholder.png"}
            alt={product.name}
            className="w-full h-[400px] object-contain rounded shadow"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/placeholder.png";
            }}
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          <div className="flex items-center mb-2 text-yellow-500">
            {[...Array(ratingStars)].map((_, i) => (
              <AiFillStar key={i} />
            ))}
            <span className="text-sm text-gray-600 ml-2">({reviewCount} reviews)</span>
          </div>

          <p className="text-2xl font-semibold text-green-600 mb-4">₹{product.price}</p>

          <div className="mb-4">
            <label className="block font-medium mb-1">Select Size:</label>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded ${
                    selectedSize === size ? "bg-blue-600 text-white" : "bg-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={onQuantityChange}
              className="w-20 p-1 border rounded"
            />
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
            >
              Buy Now
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Get it by <span className="font-semibold">Tomorrow</span> | Free Delivery
          </p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Product Description</h2>
            <p>{product.description || "A high-quality product for everyday use."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
