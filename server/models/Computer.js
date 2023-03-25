const mongoose = require("mongoose");
const computerSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  motherboard: {
    required: [true, 'Motherboard is required!'],
    maxlength: [14, "Motherboard cannot have more than 10 characters!"],
    type: String,
  },
  processor: {
    required: [true, 'Processor is required!'],
    maxlength: [16, "Processor cannot have more than 16 characters!"],
    type: String,
  },
  videocard: {
    required: [true, 'Videocard is required!'],
    maxlength: [14, "Videocard cannot have more than 14 characters!"],
    type: String,
  },
  os: {
    required: [true, 'Operation System is required!'],
    maxlength: [10, "Operation System cannot have more than 10 characters!"],
    type: String,
  },
  ssd: {
    required: [true, 'SSD is required!'],
    maxlength: [6, "SSD cannot have more than 6 characters!"],
    type: String,
  },
  harddrive: {
    required: [true, 'HardDrive is required!'],
    maxlength: [14, "HardDrive cannot have more than 10 characters!"],
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
