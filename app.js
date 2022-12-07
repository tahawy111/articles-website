//  to controll your website
const express = require("express");
const router = require("./routes/router");
const helmet = require("helmet");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// mongoose
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// to make our app secure
app.use(helmet());

// routes
app.use(router);
