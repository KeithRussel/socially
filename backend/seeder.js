const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const users = require('./data/users');
const profiles = require('./data/profiles');
const User = require('./models/UserModel');
const Profile = require('./models/ProfileModel');
const connectDB = require('./utils/dbConnect');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // await User.deleteMany();

    // await User.insertMany(users);

    await Profile.deleteMany();

    await Profile.insertMany(profiles);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
