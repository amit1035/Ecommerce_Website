const express = require("express");
const cors = require("cors");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

// Use environment port if available (for Render), otherwise fallback to 4000
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Serve images from public folder
app.use("/images", express.static(path.join(__dirname, "public/images")));

// API routes
app.use("/api", apiRoutes);

// Start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port} or on Render`);
});
