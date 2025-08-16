const express = require("express");
const cors = require("cors");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Use the routes
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
