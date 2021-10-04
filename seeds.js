const mongoose = require("mongoose");
const Yarn = require("./models/yarn");

mongoose
  .connect("mongodb://localhost:27017/yarnApp")
  .then(() => {
    console.log("CONNECTION OPEN!!");
  })
  .catch((err) => {
    console.log("OH NO! ERROR!!");
    console.log(err);
  });

Yarn.insertMany([
  { name: "Blueberry", brand: "Thready", color: "Blue", weight: 3 },
  { name: "Firetruck", brand: "Yarn Luv", color: "Red", weight: 5 },
  { name: "Seafoam", brand: "Sailor", color: "Green", weight: 7 },
  { name: "Violet Garden", brand: "Suzy Bits", color: "Purple", weight: 6 },
  { name: "Sunshine", brand: "Wools N' Kits", color: "Yellow", weight: 4 },
]);

