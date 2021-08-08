const express = require("express");
const router = express.Router();
const { signIn, signUp } = require("../controllers/auth");
const { body } = require("express-validator");

router.post(
  "/sign-up",
  [
    body("email").isEmail(),
    body("firstName").isString(),
    body("lastName").isString(),
    body("password").isStrongPassword(),
  ],
  signUp
);

router.post("/sign-in", signIn);

module.exports = router;
