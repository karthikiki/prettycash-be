const mongoose = require('mongoose')

// schema Design

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required:[true, 'Name is required']
  },
  email:{
    type: String,
    required:[true, 'email is required and should be unique'],
    unique: true
  },
  password:{
    type: String,
    required:[true, 'Password Required']
  }
}, {timestamp: true})

//Export
const userModel = mongoose.model('users', userSchema)
module.exports = userModel