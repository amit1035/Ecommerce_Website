const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json()); 
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Categories data (basic structure, image path will be dynamically added later)
const categoriesData = [
  { id: 1, name: "Women Clothing", image: "Banner.jpg" },
  { id: 2, name: "Men Clothing", image: "Men.jpg" },
  { id: 3, name: "Kids Clothing", image: "kids.jpg" },
  { id: 4, name: "Footwear", image: "footware.jpeg" },
  { id: 5, name: "Jewellery", image: "jewellers.jpg" },
  { id: 6, name: "Accessories & more", image: "acces.jpg" },
  { id: 7, name: "Beauty Wellness", image: "makeup.jpg" },
  { id: 8, name: "Mobile", image: "Mobile.jpg" },
  { id: 9, name: "Sports", image: "sport.jpg" },
  { id: 10, name: "Home Decor", image: "decor.jpg" },
  { id: 11, name: "Watches", image: "Watches.jpg" },
  { id: 12, name: "Home Furnishing", image: "furnishing.jpg" },
  { id: 13, name: "Toys", image: "toys.jpg" },
  { id: 14, name: "Electronics", image: "electronics.jpg" },
  { id: 15, name: "Kitchen Storage & Containers", image: "kitchen.jpg" }
];

// Product data (image filenames only)
const productData = {
  "Women Clothing": [
    { id: 101, name: "Women Product 1", image: "banner2.jpg", price: 999 },
    { id: 102, name: "Women Product 2", image: "banner2.jpg", price: 1299 },
    { id: 103, name: "Women Product 3", image: "banner2.jpg", price: 799 },
    { id: 104, name: "Women Product 4", image: "banner2.jpg", price: 199 },
    { id: 111, name: "Women Product 11", image: "banner2.jpg", price: 1299 },
    { id: 112, name: "Women Product 11", image: "banner2.jpg", price: 1299 },
    { id: 131, name: "Women Product 11", image: "banner2.jpg", price: 1299 },
  ],
  "Men Clothing": [
    { id: 201, name: "Men Product 1", image: "men.jpg", price: 1199 },
    { id: 202, name: "Men Product 2", image: "men.jpg", price: 1499 },
    { id: 203, name: "Men Product 3", image: "men.jpg", price: 999 },
    { id: 204, name: "Men Product 3", image: "men.jpg", price: 999 },
    { id: 205, name: "Men Product 3", image: "men.jpg", price: 999 },
    { id: 206, name: "Men Product 3", image: "men.jpg", price: 999 },
    { id: 207, name: "Men Product 3", image: "men.jpg", price: 999 },
    { id: 208, name: "Men Product 3", image: "men.jpg", price: 999 },
    { id: 209, name: "Men Product 3", image: "men.jpg", price: 999 },
    { id: 210, name: "Men Product 3", image: "men.jpg", price: 999 }
  ],
  "kids Clothing":[
    { id: 0, name: "kids", image: "kids.jpg", price: 99},
    { id: 1, name: "kids", image: "kids.jpg", price: 99},
    { id: 2, name: "kids", image: "kids.jpg", price: 99},
    { id: 3, name: "kids", image: "kids.jpg", price: 99},
    { id: 4, name: "kids", image: "kids.jpg", price: 99},
    { id: 5, name: "kids", image: "kids.jpg", price: 99},
  ],
  "Footwear":[
    { id: 0, name: "kids", image: "Footwear.jpg", price: 99},
    { id: 1, name: "kids", image: "Footwear.jpg", price: 99},
    { id: 2, name: "kids", image: "Footwear.jpg", price: 99},
    { id: 3, name: "kids", image: "Footwear.jpg", price: 99},
    { id: 4, name: "kids", image: "Footwear.jpg", price: 99},
    { id: 5, name: "kids", image: "Footwear.jpg", price: 99},
  ],
  "jewellers":[
    { id: 0, name: "jewellers", image: "jewellers.jpg", price: 99},
    { id: 1, name: "jewellers", image: "jewellers.jpg", price: 99},
    { id: 2, name: "jewellers", image: "jewellers.jpg", price: 99},
    { id: 3, name: "jewellers", image: "jewellers.jpg", price: 99},
    { id: 4, name: "jewellers", image: "jewellers.jpg", price: 99},
    { id: 5, name: "jewellers", image: "jewellers.jpg", price: 99},
  ],
  "Acessories":[
    { id: 0, name: "Acessories", image: "acces.jpg", price: 99},
    { id: 1, name: "Acessories", image: "acces.jpg", price: 99},
    { id: 2, name: "Acessories", image: "acces.jpg", price: 99},
    { id: 3, name: "Acessoriesds", image: "acces.jpg", price: 99},
    { id: 4, name: "Acessories", image: "acces.jpg", price: 99},
    { id: 5, name: "kiAcessoriesds", image: "acces.jpg", price: 99},
  ],

};

// ✅ API to get all categories
app.get("/api/categories", (req, res) => {
  const baseUrl = `${req.protocol}://${req.get("host")}`;
  const categories = categoriesData.map(cat => ({
    ...cat,
    image: `${baseUrl}/images/${cat.image}`
  }));
  res.json(categories);
});

// ✅ API to get category details by name
app.get("/api/categories/:name", (req, res) => {
  const categoryName = req.params.name;
  const baseUrl = `${req.protocol}://${req.get("host")}`;

  const category = categoriesData.find(cat => cat.name === categoryName);
  if (!category) {
    return res.status(404).json({ error: "Category not found" });
  }

  const products = productData[categoryName]?.map(product => ({
    ...product,
    image: `${baseUrl}/images/${product.image}`
  })) || [];

  res.json({
    ...category,
    image: `${baseUrl}/images/${category.image}`,
    description: `${category.name} Collection`,
    products
  });
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
