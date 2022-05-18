//  to controll ur website

const express = require("express");
const app = express();
const port = 5000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const path = require("path");

// mongoose
const mongoose = require("mongoose");
const Article = require("./models/articleSchema");

mongoose
  .connect(
    "mongodb+srv://admin:admin123456@cluster0.rnjss.mongodb.net/articles?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// routes
app.get("/", (req, res) => {
  res.redirect("/all-articles");
});

app.get("/all-articles", (req, res) => {
  Article.find()
    .then((result) => {
      res.render("index", {
        title: "all-articles",
        data: result,
      });
    })
    .catch((err) => console.log(err));
});

app.get("/add-new-article", (req, res) => {
  res.render("add-new-article", {
    title: "add-new-article",
  });
});

app.get("/all-articles/article-details/:id", (req, res) => {
  Article.findById(req.params.id).then((result) => {
    res.render("details", { data: result, title: "Details" });
  });
});

app.get("/all-articles/delete/:id", (req, res) => {
  Article.findByIdAndRemove(req.params.id)
    .then((result) => res.redirect("/all-articles"))
    .catch((err) => console.log(err));
});

app.post("/all-articles", (req, res) => {
  const article = new Article(req.body);

  article
    .save()
    .then((result) => {
      res.redirect("/all-articles");
    })
    .catch((err) => console.log(err));
});

//  404
app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});
