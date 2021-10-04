const mongoose = require("mongoose");
const { Schema } = mongoose;

const yarnSchema = new Schema({
img:{
    
},

  name: {
    type: String,
    required: true,
  },

  brand: {
    type: String,
    enum: ["Thready", "Yarn Luv", "Sailor", "Suzy Bits", "Wools N' Kits"],
    required: true,
  },

  color: {
    type: String,
    enum: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"],
    required: true,
  },

  weight: {
    type: Number,
    enum: [1, 2, 3, 4, 5, 6, 7],
    required: true,
  },
});

const Yarn = mongoose.model("Yarn", yarnSchema);

module.exports = Yarn;
