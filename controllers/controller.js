const Article = require("../models/articleSchema");

const redirectToAllArticles = (req, res) => {
  res.redirect("/all-articles");
};

const allArticles = (req, res) => {
  Article.find()
    .then((result) => {
      res.render("index", {
        title: "all-articles",
        data: result,
      });
    })
    .catch((err) => console.log(err));
};

const addNewArticle = (req, res) => {
  res.render("add-new-article", {
    title: "add-new-article",
  });
};

const details = (req, res) => {
  Article.findById(req.params.id).then((result) => {
    res.render("details", { data: result, title: "Details" });
  });
};

const deleteArticle = (req, res) => {
  Article.findByIdAndRemove(req.params.id)
    .then((result) => res.redirect("/all-articles"))
    .catch((err) => console.log(err));
};

const editGet = (req, res) => {
  Article.findById(req.params.id)
    .then((result) =>
      res.render("edit", {
        title: "Edit",
        data: result,
      })
    )
    .catch((err) => console.log(err));
};

const editPost = (req, res) => {
  Article.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    body: req.body.body,
    summary: req.body.summary,
  })
    .then((result) => {
      res.redirect(`/all-articles/article-details/${req.params.id}`);
    })
    .catch((err) => console.log(err));
};

const postArticle = (req, res) => {
  const article = new Article(req.body);

  article
    .save()
    .then((result) => {
      res.redirect("/all-articles");
    })
    .catch((err) => console.log(err));
};

const errRoute404 = (req, res) => {
  res.status(404).send("Sorry can't find that!");
};

module.exports = {
  redirectToAllArticles,
  allArticles,
  addNewArticle,
  details,
  deleteArticle,
  editGet,
  editPost,
  postArticle,
  errRoute404,
};
