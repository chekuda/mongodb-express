const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newSchema = new Schema({
  name: String,
  surname: String
})

const User = mongoose.model('user', newSchema)

module.exports = User