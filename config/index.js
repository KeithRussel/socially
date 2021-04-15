const dev = process.env.NODE_ENV === 'development';

module.exports = serverDev = dev
  ? 'http://localhost:3000'
  : 'https://yourwebsite.com';
