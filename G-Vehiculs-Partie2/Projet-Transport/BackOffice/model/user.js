const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    maxlength: [30, "your name cannot exceed 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [8, "password must be at least 8 characters"],
    select: false, // when the response returned to the user the value password will not be returned
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

// encrypt the password before saving the user to the database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  //hash the password
  this.password = await bcrypt.hash(this.password, 10);
});

// return JWT token
userSchema.methods.getJWToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
};

// compare user password
userSchema.methods.comparePassword = async function (value) {
  return await bcrypt.compare(value, this.password);
};

module.exports = mongoose.model("User", userSchema);
