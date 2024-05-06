import asyncHandler from "express-async-handler";
import Passwords from "../models/passwordsSchema.js";

// @desc        Get logged in user passwords
// @route       GET /api/passwords/mypasswords
// @access      Private
const getMyPasswords = asyncHandler(async (req, res) => {
  const passwords = await Passwords.find({ user: req.user._id });
  res.json(passwords);
});

// @desc        Create new Order
// @route       POST /api/passwords
// @access      Private
const addPasswords = asyncHandler(async (req, res) => {
  const { password, passwordUser, passwordSource } = req.body;

  const passwords = new Passwords({
    user: req.user._id,
    password,
    passwordUser,
    passwordSource,
  });

  const addedPassword = await passwords.save();

  res.status(201).json(addedPassword);
});

export { getMyPasswords, addPasswords };
