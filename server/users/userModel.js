var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  phone:{
    type: Number,
    required: true,
    unique : true
  },
  password:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('users', UserSchema);