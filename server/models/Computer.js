const mongoose = require("mongoose");
const computerSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  motherboard: {
    required: [true, 'Motherboard is required!'],
    maxlength: [35, "Motherboard cannot have more than 35 characters!"],
    type: String,
  },
  processor: {
    required: [true, 'Processor is required!'],
    maxlength: [35, "Processor cannot have more than 35 characters!"],
    type: String,
  },
  videocard: {
    required: [true, 'Videocard is required!'],
    maxlength: [35, "Videocard cannot have more than 35 characters!"],
    type: String,
  },
  os: {
    required: [true, 'Operation System is required!'],
    maxlength: [15, "Operation System cannot have more than 15 characters!"],
    type: String,
  },
  ssd: {
    required: [true, 'SSD is required!'],
    maxlength: [20, "SSD cannot have more than 20 characters!"],
    type: String,
  },
  harddrive: {
    required: [true, 'HardDrive is required!'],
    maxlength: [25, "HardDrive cannot have more than 25 characters!"],
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
  discount: {
    required: true,
    type: String,
  }
});

const Computer = new mongoose.model("Computer", computerSchema);
module.exports = Computer;
