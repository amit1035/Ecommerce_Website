const express = require("express");
const cors = require("cors");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Serve images from public/images
app.use("/images", express.static(path.join(__dirname, "public/images")));

// API routes
app.use("/api", apiRoutes);

// Health check route
app.get("/", (req, res) => {
  res.send("✅ Backend is running! Use /api for API routes.");
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
