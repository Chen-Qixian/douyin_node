const mongoose = require('mongoose')
let liveSchema = new mongoose.Schema({
  author: {type: mongoose.Types.ObjectId, ref: 'user', required: true, unique: true},
  description: String,
  // imgUrl: {type: String, default: '/res/img/default.jpg'},
  publishUrl: String,
  playUrl: String,
  createdAt: {type: String},
  updatedAt: {type: String},
  living: {type: Boolean, default: false}
})
let Live = mongoose.model('live', liveSchema)
module.exports = Live
