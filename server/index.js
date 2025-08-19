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

// ---------- Serve React frontend ----------
const frontendPath = path.join(__dirname, "frontend/build");
app.use(express.static(frontendPath));

// Catch-all (React Router fix)
app.get("/*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ------------------------------------------

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
