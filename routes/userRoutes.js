const express = require('express');
const router = express.Router();
// import { authUser } from '../controllers/userController.js';
const { authUser } = require('../controllers/userController');

router.post('/login', authUser);

module.exports = router;
