const mongoose = require("mongoose");
const phoneSchema = new mongoose.Schema({
  phonename: {
    type: String,
    required: true,
  },
  capacity: {
    required: [true, 'Capacity is required!'],
    type: String,
  },
  displaysize: {
    required: [true, 'Display Size is required!'],
    type: String,
  },
  color: {
    required: [true, 'Color is required!'],
    type: String,
  },
  camera: {
    required: [true, 'Camera is required!'],
    type: String,
  },
  price: {
    required: [true, 'Price is required!'],
    type: String,
  },
  battery: {
    required: [true, 'Battery is required!'],
    type: String,
  },
  os: {
    required: [true, 'Operation System is required!'],
    type: String,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  images: {
    required: [true, 'Images are required!'],
    type: Array,
  },
  discount: {
    required: true,
    type: String,
  }
});

const Phone = new mongoose.model("Phone", phoneSchema);
module.exports = Phone;
