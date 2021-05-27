const asyncHandler = require('express-async-handler');
const Profile = require('../models/ProfileModel');

// @desc    Get my profile
// @route   GET /api/profile
// @access  Private

const getUserProfile = asyncHandler(async (req, res) => {
  // res.json('Get User Profile');
  try {
    const profile = await Profile.findOne({ user: req.user._id }).populate(
      'user',
      ['firstName', 'lastName']
    );

    if (!profile) {
      // If no profile
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile);
  } catch (error) {
    res.status(500);
    throw new Error('Profile not found');
  }
});

// @desc    Create my profile
// @route   POST /api/profile
// @access  Private
const createUserProfile = asyncHandler(async (req, res) => {
  res.json('Create User Profile');
});

module.exports = { getUserProfile, createUserProfile };
