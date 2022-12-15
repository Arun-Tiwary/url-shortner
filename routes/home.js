const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", async (req, res) => {
  const htmlPath = path.join(__dirName, 'public', 'home.html');
  res.sendfile(htmlPath);
});

module.exports = router;
