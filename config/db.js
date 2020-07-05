require("dotenv").config()
const mongoose = require('mongoose')

const URI = 'mongodb://localhost:27017/tppl'

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection

module.exports = db