const express = require("express");
const controller = require("../controllers/controller");
const router = express.Router();

router.get("/", controller.redirectToAllArticles);

router.get("/all-articles", controller.allArticles);

router.get("/add-new-article", controller.addNewArticle);

router.get("/all-articles/article-details/:id", controller.details);

router.get("/all-articles/delete/:id", controller.deleteArticle);

router.get("/all-articles/edit/:id", controller.editGet);

router.post("/all-articles/update/:id", controller.editPost);

router.post("/all-articles", controller.postArticle);

//  404
router.use(controller.errRoute404);

module.exports = router;
