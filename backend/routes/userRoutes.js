const express = require('express');
const router = express.Router();
const { authUser, registerUser } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').post(registerUser);
// router.route('/profile').get(protect, getUserProfile);
router.post('/login', authUser);

module.exports = router;
