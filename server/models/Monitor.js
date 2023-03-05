const mongoose = require("mongoose");
const monitorSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
    minlength: [4, "Manufacturer should have at least 2 characters!"],
    maxlength: [10, "Manufacturer cannot have more than 10 characters!"],
  },
  screenresolution: {
    required: true,
    type: String,
  },
  resolution: {
    required: true,
    type: String,
  },
  refreshrate: {
    required: true,
    type: String,
  },
  paneltype: {
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
  images: {
    required: true,
    type: Array,
  },
});

const Monitor = new mongoose.model("Monitor", monitorSchema);
module.exports = Monitor;
