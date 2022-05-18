//  to controll ur website

const express = require("express");
const app = express();
const port = 5000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const router = require("./routes/router");

// mongoose
const mongoose = require("mongoose");

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
app.use(router);
