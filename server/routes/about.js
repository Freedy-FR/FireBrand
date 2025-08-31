const express = require("express");
const router = express.Router();

// GET /about
router.get("/", (req, res) => {
  res.send("Welcome to FireBrand Church! 🙏 We are here to serve the community.");
});

module.exports = router;
