const mongoose = require("mongoose");
const phoneSchema = new mongoose.Schema({
  phonename: {
    type: String,
    maxlength: [35, "Manufacturer cannot have more than 35 characters!"],
    required: true,
  },
  capacity: {
    required: [true, "Capacity is required!"],
    maxlength: [5, "Capacity cannot have more than 5 characters!"],
    type: String,
  },
  displaysize: {
    required: [true, "Display Size is required!"],
    maxlength: [15, "Display Size cannot have more than 15 characters!"],
    type: String,
  },
  color: {
    required: [true, "Color is required!"],
    maxlength: [15, 'Color cannot have more than 15 characters!'],
    type: String,
  },
  camera: {
    required: [true, "Camera is required!"],
    maxlength: [35, 'Camera cannot have more than 35 characters!'],
    type: String,
  },
  price: {
    required: [true, "Price is required!"],
    type: String,
  },
  battery: {
    required: [true, "Battery is required!"],
    maxlength: [20, 'Battery cannot have more than 15 characters!'],
    type: String,
  },
  os: {
    required: [true, "Operation System is required!"],
    maxlength: [15, 'Operation System cannot have more than 15 characters!'],
    type: String,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  images: {
    required: [true, "Images are required!"],
    type: Array,
  },
  discount: {
    required: true,
    type: String,
  },
});

const Phone = new mongoose.model("Phone", phoneSchema);
module.exports = Phone;
