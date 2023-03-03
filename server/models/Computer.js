const mongoose = require("mongoose");
const computerSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
    minlength: [4, "Manufacturer should have at least 2 characters!"],
    maxlength: [10, "Manufacturer cannot have more than 10 characters!"],
  },
  motherboard: {
    required: true,
    type: String,
  },
  processor: {
    required: true,
    type: String,
  },
  videocard: {
    required: true,
    type: String,
  },
  os: {
    required: true,
    type: String,
  },
  ssd: {
    required: true,
    type: String,
  },
  harddrive: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: String,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  carImages: {
    required: true,
    type: Array,
  },
});

const Computer = new mongoose.model("Computer", computerSchema);
module.exports = Computer;
