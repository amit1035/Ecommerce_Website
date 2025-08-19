const express = require("express");
const cors = require("cors");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

// Use environment port if available (for Render), otherwise fallback to 4000
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Serve images from public/images
app.use("/images", express.static(path.join(__dirname, "public/images")));

// API routes
app.use("/api", apiRoutes);

// Default route for health check
app.get("/", (req, res) => {
  res.send("✅ Backend is running! Use /api for API routes.");
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
