const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  profilePicture: {
    type: Object,
    default: {},
  },
  bio: {
    type: String,
  },
  location: {
    type: String,
  },
});

module.exports =
  mongoose.models.Profile || mongoose.model('Profile', ProfileSchema);
