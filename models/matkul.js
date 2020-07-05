const mongoose = require('mongoose')

const matkulSchema = new mongoose.Schema({
  kode: String,
  nama_matkul: String,
  semester: Number,
  sks: Number
},
{ timestamps: true }
)

const Matkul = mongoose.model('matkul', matkulSchema)

module.exports = Matkul