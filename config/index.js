const dev = process.env.NODE_ENV === 'development';

module.exports = server = dev
  ? 'http://localhost:3000'
  : 'https://yourwebsite.com';
