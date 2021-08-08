const User = require("../models/user");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.signUp = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      error: errors.array(),
      message: "Invalid entries",
    });
  }
  let hashedPassword;

  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (err) {
      return res
        .status(400)
        .json({ success: false, message: "Something went wrong!!!" });
    }
    if (user) {
      return res.status(400).json({
        success: false,
        message: "The entered email address is already registered.",
      });
    } else {
      // hash password and create user
      bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        hashedPassword = hash;
        const newUser = new User(req.body);
        newUser.password = hashedPassword;
        newUser.save((err, savedUser) => {
          res.status(200).json({ success: true });
        });
      });
    }
  });
};

exports.signIn = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (err || !user) {
      return res
        .status(401)
        .json({ success: false, message: "User does not exist" });
    } else {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
          return res
            .status(200)
            .json({ success: true, message: "User logged in", user });
        } else {
          return res
            .status(403)
            .json({ success: false, message: "Incorrect password" });
        }
      });
    }
  });
};
