const express = require("express");
const cors = require("cors");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

// Use Render's provided port OR fallback to 4000 locally
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Use the routes
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
