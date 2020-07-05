const mongoose = require('mongoose')

const dosenSchema = new mongoose.Schema({
  kode: String,
  name: String,
  email: String,
  password: String,
  matkul: [{type: mongoose.Schema.Types.ObjectId, ref: 'matkul'}],
})

const Dosen = mongoose.model('dosen', dosenSchema)

module.exports = Dosen