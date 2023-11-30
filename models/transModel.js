const mongoose = require('mongoose')

const transectionSchema = new mongoose.Schema({
  userid:{
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: [true, 'Amount required']
  },
  type:{
    type: String,
    required: [true, "type required"]
  },
  category: {
    type: String,
    required: [true, 'Cat required']
  },
  refrence: {
    type: String,
  },
  description: {
    type: String,
    required: [true, 'Description required']
  },
  date: {
    type: Date,
    required: [true, "Date required"]
  }

}, { timestamps: true })

const transectionModel = mongoose.model('transections', transectionSchema)
module.exports = transectionModel