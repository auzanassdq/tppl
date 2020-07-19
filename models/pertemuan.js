const mongoose = require('mongoose')

const pertemuanSchema = new mongoose.Schema({
  tanggal: Date,
  dosen: {type: mongoose.Schema.Types.ObjectId, ref: 'dosen'},
  matkul: {type: mongoose.Schema.Types.ObjectId, ref: 'matkul'},
  kehadiran: [
    // INI YANG BENAR
    // {type: mongoose.Schema.Types.ObjectId, ref: 'kehadiran'}

    // INI PERCOBAAN
    {
      mahasiswa: {type: mongoose.Schema.Types.ObjectId, ref: 'mahasiswa'},
      status: String
    }
  ],
},
{ timestamps: true }
)

const Pertemuan = mongoose.model('pertemuan', pertemuanSchema)

module.exports = Pertemuan