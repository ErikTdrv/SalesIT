const mongoose = require("mongoose");
const phoneSchema = new mongoose.Schema({
  phonename: {
    type: String,
    required: true,
    minlength: [4, "Manufacturer should have at least 2 characters!"],
    maxlength: [10, "Manufacturer cannot have more than 10 characters!"],
  },
  capacity: {
    required: true,
    type: String,
  },
  displaysize: {
    required: true,
    type: String,
  },
  color: {
    required: true,
    type: String,
  },
  camera: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: String,
  },
  battery: {
    required: true,
    type: String,
  },
  os: {
    required: true,
    type: String,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  phoneImages: {
    required: true,
    type: Array,
  },
});

const Phone = new mongoose.model("Phone", phoneSchema);
module.exports = Phone;
