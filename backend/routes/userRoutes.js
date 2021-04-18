const express = require('express');
const router = express.Router();
const { authUser } = require('../controllers/userController');

router.post('/api/login', authUser);

module.exports = router;
