const mongoose = require('mongoose')

const mahasiswaSchema = new mongoose.Schema({
  nim: String,
  name: String,
  email: String,
  password: String,
},
{ timestamps: true }
)

const Mahasiswa = mongoose.model('mahasiswa', mahasiswaSchema)

module.exports = Mahasiswa