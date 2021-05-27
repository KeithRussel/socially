const express = require('express');
const router = express.Router();
const {
  getUserProfile,
  createUserProfile,
} = require('../controllers/profileController');
const { protect, admin } = require('../middleware/authMiddleware');

router
  .route('/me')
  .get(protect, getUserProfile)
  .post(protect, createUserProfile);

module.exports = router;
