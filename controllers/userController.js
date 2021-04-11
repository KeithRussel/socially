const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');
const User = require('../models/UserModel');
// const next = require('next');
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });

// @desc    Auth user & get token
// @route   POST /login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  // return app.render(req, res, '/a', req.query);
  // res.json('Auth User');
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user.id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
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
