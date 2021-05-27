const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const colors = require('colors');
const users = require('./data/users');
// const { serverDev } = require('./config');
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');
const connectDB = require('./utils/dbConnect');

const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

dotenv.config();

connectDB();

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  server.use('/api/users', userRoutes);
  server.use('/api/profile', profileRoutes);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.use(notFound);
  server.use(errorHandler);

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(
      `> Server running in ${process.env.NODE_ENV} http://localhost:${port}`
        .yellow.bold
    );
  });
});
