const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: [4, "Username should have at least 4 characters!"],
    maxlength: [10, "Username cannot have more than 10 characters!"],
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
    minlength: [6, "Password should have at least 6 characters!"],
    maxlength: [12, "Password cannot have more than 12 characters!"],
  },
  avatarImg: {
    required: false,
    type: String,
  },
  imageId: {
    required: false,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  addedProducts: [{}],
  addedComputers: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Computer",
    },
  ],
  addedMonitors: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Monitor",
    },
  ],
  addedPhones: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Phone",
    },
  ],
  createdProducts: [{}],
});

userSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    return next();
  });
});

const User = new mongoose.model("User", userSchema);
module.exports = User;
