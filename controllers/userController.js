// import asyncHandler from 'express-async-handler';
const asyncHandler = require('express-async-handler');
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const server = express();

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  res.json('Auth User');
});

// export { authUser };
module.exports = { authUser };
