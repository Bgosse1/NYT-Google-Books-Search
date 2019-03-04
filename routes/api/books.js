const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;
