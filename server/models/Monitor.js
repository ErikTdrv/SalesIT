const mongoose = require("mongoose");
const monitorSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  screensize: {
    required: [true, 'Screen Size is required'],
    type: String,
  },
  resolution: {
    required: [true, 'Resolution is required'],
    type: String,
  },
  refreshrate: {
    required: [true, 'Refresh Rate is required'],
    type: String,
  },
  paneltype: {
    required: [true, 'Panel Type is required'],
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
