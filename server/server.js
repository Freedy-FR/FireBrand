const express = require("express");
const app = express();

// Import routes
const aboutRoute = require("./routes/about");

// Use routes
app.use("/about", aboutRoute);

// Root route
app.get("/", (req, res) => {
  res.send("🔥 FireBrand server is running!");
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});