const router = require("express").Router();
const ArticlesController = require("../../controllers/articleController");

// Matches with "/api/Articles"
router.route("/")
  .get(ArticlesController.findAll)
  .post(ArticlesController.create);

// Matches with "/api/Articles/:id"
router
  .route("/:id")
  .get(ArticlesController.findById)
  .put(ArticlesController.update)
  .delete(ArticlesController.remove);

module.exports = router;
