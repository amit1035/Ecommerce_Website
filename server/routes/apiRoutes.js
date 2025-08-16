// routes/api.js
const express = require("express");
const router = express.Router();

const categoriesData = require("../data/categoriesData");
const productData = require("../data/productsData");
const { bannerItems, clearanceItems } = require("../data/productsDatainfo");

// Helper: Full image URL
const getImageUrl = (req, imagePath) =>
  imagePath.startsWith("http")
    ? imagePath
    : `${req.protocol}://${req.get("host")}/images/${imagePath}`;

// Helper: Slug normalize
const normalizeSlug = (str) =>
  str.toLowerCase().trim().replace(/\s+/g, "-");

// ================================
// HOME PAGE DATA (Banner + Clearance)
// ================================
router.get("/home-data", (req, res) => {
  res.json({
    banners: bannerItems.map(item => ({
      ...item,
      image: getImageUrl(req, item.image),
    })),
    clearance: clearanceItems.map(item => ({
      ...item,
      image: getImageUrl(req, item.image),
    })),
  });
});

// ================================
// CATEGORIES
// ================================
router.get("/categories", (req, res) => {
  res.json(
    categoriesData.map(cat => ({
      ...cat,
      image: getImageUrl(req, cat.image),
    }))
  );
});

router.get("/categories/:slug", (req, res) => {
  const param = normalizeSlug(req.params.slug);

  const category = categoriesData.find(
    cat =>
      normalizeSlug(cat.slug || cat.name) === param
  );

  if (!category) return res.status(404).json({ error: "Category not found" });

  res.json({
    ...category,
    image: getImageUrl(req, category.image),
    description: `${category.name} Collection`,
    products: (productData[category.name] || []).map(p => ({
      ...p,
      image: getImageUrl(req, p.image),
    })),
  });
});

// ================================
// PRODUCTS
// ================================
router.get("/products", (req, res) => {
  const allProducts = Object.entries(productData).flatMap(([category, products]) =>
    products.map(p => ({
      ...p,
      image: getImageUrl(req, p.image),
      category,
    }))
  );

  res.json(allProducts);
});

router.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  let foundProduct = null;

  for (const [category, products] of Object.entries(productData)) {
    const product = products.find(p => p.id === productId);
    if (product) {
      foundProduct = { ...product, image: getImageUrl(req, product.image), category };
      break;
    }
  }

  if (!foundProduct) return res.status(404).json({ error: "Product not found" });

  res.json(foundProduct);
});

module.exports = router;
