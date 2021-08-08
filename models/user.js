const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);


module.exports = mongoose.model("User", userSchema);