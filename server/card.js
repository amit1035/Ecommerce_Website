const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors()); 
app.use(express.json());

const categoryDetails = {
  "Men Clothing": {
    description: "A variety of men's clothing.",
    products: [
      { id: 1, name: "Men’s T-shirt", price: 299, image: "http://localhost:4000/images/men-tshirt.jpg" },
      { id: 2, name: "Jeans", price: 499, image: "http://localhost:4000/images/men-jeans.jpg" },
    ],
  },
  "Women Clothing": {
    description: "A variety of women's clothing.",
    products: [
      { id: 3, name: "Women Kurta", price: 499, image: "http://localhost:4000/images/women-kurta.jpg" },
      { id: 4, name: "Saree", price: 999, image: "http://localhost:4000/images/saree.jpg" },
    ],
  },
};

app.get("/api/categories/:name", (req, res) => {
  const categoryName = req.params.name;
  const category = categoryDetails[categoryName];
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ error: "Category not found" });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
