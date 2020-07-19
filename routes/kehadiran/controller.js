const jwt = require("jsonwebtoken");
const Kehadiran = require('../../models/kehadiran')
const Pertemuan = require('../../models/pertemuan')

module.exports = {
  postKehadiranIn: async (req, res) => {
    try {
      let token = req.body.token
      let decoded = jwt.verify(token, 'tppl');

      const newKehadiran = await Kehadiran.create({
        pertemuan: decoded.idPertemuan,
        mahasiswa: req.params.idMahasiswa,
        status: "Tap In",
      });

      Pertemuan.findByIdAndUpdate(
        decoded.idPertemuan,
        {$push: {kehadiran: newKehadiran._id}},
        {new : true}
      )
      .then(result => 
        res.send({
          message: "sukses melakukan tap in",
          result
        })
      )
      .catch(error => {
        res.send({
          message: 'Gagal melakukan tap in',
          error: error.stack
        })
      })
    } catch (err) {
      res.send({
        message: "Terjadi kesalahan",
        error: err,
      });
    }
  },

  postKehadiranOut: (req, res) => {
    try {
      let token = req.body.token
      let decoded = jwt.verify(token, 'tppl');

      console.log(decoded.idPertemuan)
      console.log(req.params.idMahasiswa)

      // PERCOBAAN
      Pertemuan.findByIdAndUpdate(
        decoded.idPertemuan,
        // { _id: decoded.idPertemuan },
        { $set: { "kehadiran.$[elem].status": "YES" } },
        { arrayFilters: [ { 
            "elem.mahasiswa": req.params.idMahasiswa
          }], 
         new: true },
      )

      // INI YANG BENAR
      // Kehadiran.findOneAndUpdate({ 
      //   pertemuan: decoded.idPertemuan,
      //   mahasiswa: req.params.idMahasiswa
      // },
      //   {$set : {"status" : "Hadir"} },
      //   {new: true}
      // )
      .populate("kehadiran", "mahasiswa, status")
      .then(result => {
        res.send({
          message: 'Berhasil melakukan tap out',
          result
        })
      })
      .catch(error => {
        res.send({
          message: 'Gagal melakukan tap out',
          error: error.stack
        })
      })
    } catch (err) {
      res.send({
        message: "Terjadi kesalahan",
        error: err,
      });
    }
  },
};
