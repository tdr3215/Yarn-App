const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const Yarn = require("./models/yarn");

// MONGOOSE REQUIREMENTS
mongoose
  .connect("mongodb://localhost:27017/yarnApp")
  .then(() => {
    console.log("CONNECTION OPEN!!");
  })
  .catch((err) => {
    console.log("OH NO! ERROR!!");
    console.log(err);
  });

// EXPRESS REQUIREMENTS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));

app.get("/yarn", async (req, res) => {
  const yarns = await Yarn.find({});
  res.render("index", { yarns });
});

app.listen(3000, () => {
  console.log("APP IS LISTENING ON PORT 3000");
});
