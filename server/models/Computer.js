const mongoose = require("mongoose");
const computerSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
    minlength: [4, "Manufacturer should have at least 2 characters!"],
    maxlength: [10, "Manufacturer cannot have more than 10 characters!"],
  },
  motherboard: {
    required: [true, 'Motherboard is required!'],
    type: String,
  },
  processor: {
    required: [true, 'Processor is required!'],
    type: String,
  },
  videocard: {
    required: [true, 'Videocard is required!'],
    type: String,
  },
  os: {
    required: [true, 'Operation System is required!'],
    type: String,
  },
  ssd: {
    required: [true, 'SSD is required!'],
    type: String,
  },
  harddrive: {
    required: [true, 'HardDrive is required!'],
    type: String,
  },
  price: {
    required: [true, 'Price is required!'],
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
});

const Computer = new mongoose.model("Computer", computerSchema);
module.exports = Computer;
