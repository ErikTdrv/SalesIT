const mongoose = require("mongoose");
const computerSchema = new mongoose.Schema({
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
  monitorImages: {
    required: true,
    type: Array,
  },
});

const Computer = new mongoose.model("Computer", computerSchema);
module.exports = Computer;
