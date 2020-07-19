const mongoose = require('mongoose')

const kehadiranSchema = new mongoose.Schema({
  pertemuan: {type: mongoose.Schema.Types.ObjectId, ref: 'pertemuan'},
  mahasiswa: {type: mongoose.Schema.Types.ObjectId, ref: 'mahasiswa'},
  status: String
},
{ timestamps: true }
)

const Kehadiran = mongoose.model('kehadiran', kehadiranSchema)

module.exports = Kehadiran