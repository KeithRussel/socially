const asyncHandler = require('express-async-handler');

// @desc    Auth user & get token
// @route   POST /login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  res.json('Auth User');
});

// @desc    Get user profile
// @route   GET /profile
// @access  Public
const getUserProfile = asyncHandler(async (req, res) => {
  res.json('Get User Profile');
});

// @desc    Register a new user
// @route   POST /
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.json('Register User');
});

// @desc    Get all users
// @route   /
// @access  Public
const getUsers = asyncHandler(async (req, res) => {
  res.json('Get All Users');
});

// export { authUser };
module.exports = { authUser, getUserProfile, registerUser, getUsers };
