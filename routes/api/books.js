const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

router.route("/:id").delete(booksController.remove);

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;
