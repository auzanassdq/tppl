const mongoose = require('mongoose')

const pertemuanSchema = new mongoose.Schema({
  kode: String,
  tanggal: Date,
  dosen: {type: mongoose.Schema.Types.ObjectId, ref: 'dosen'},
  matkul: {type: mongoose.Schema.Types.ObjectId, ref: 'matkul'},
  mahasiswa: [{type: mongoose.Schema.Types.ObjectId, ref: 'mahasiswa'}],
},
{ timestamps: true }
)

const Pertemuan = mongoose.model('pertemuan', pertemuanSchema)

module.exports = Pertemuan