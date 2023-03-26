const mongoose = require("mongoose");
const monitorSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    maxlength: [30, 'Manufacturer cannot have more than 15 characters!'],
    required: true,
  },
  screensize: {
    required: [true, 'Screen Size is required'],
    maxlength: [15, 'Screen Size cannot have more than 15 characters!'],
    type: String,
  },
  resolution: {
    required: [true, 'Resolution is required'],
    maxlength: [15, 'Resolution cannot have more than 15 characters!'],
    type: String,
  },
  refreshrate: {
    required: [true, 'Refresh Rate is required'],
    maxlength: [10, 'Refresh Rate cannot have more than 10 characters!'],
    type: String,
  },
  paneltype: {
    required: [true, 'Panel Type is required'],
    maxlength: [10, 'Panel Type cannot have more than 10 characters!'],
    type: String,
  },
  price: {
    required: [true, 'Price is required'],
    type: String,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  images: {
    required: [true, 'Images are required'],
    type: Array,
  },
  discount: {
    required: true,
    type: String,
  }
});

const Monitor = new mongoose.model("Monitor", monitorSchema);
module.exports = Monitor;
