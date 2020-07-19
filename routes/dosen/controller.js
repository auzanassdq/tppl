const Dosen = require('../../models/dosen')

module.exports = {
  getAllDosen: (req, res) => {
    Dosen.find()
    .select("-password -createdAt -updatedAt")
    .populate("matkul", "_id nama")
    .then(result => 
      res.send({
        message: "sukses mendapatkan semua data dosen",
        result
      })
    )
    .catch(error => {
      res.send({
        message: "Gagal mendapatkan semua data dosen",
        error: error.message
      })
    })
  },

  getDosen: (req, res) => {
    Dosen.findOne({ _id: objectId(req.params.id) })
      // .populate("appointments", "-updatedAt -user")
      // .populate({ path: "appointments", populate: { path: "barbershop" } })
      .then(result => 
        res.send({
          message: "Sukses mendapatkan dosen",
          result
        })
      )
      .catch(error => {
        res.send({
          message: "Dosen tidak ditemukan",
          error: error.message
        });
      });
  },

  addDosen: (req, res) => {
    Dosen.create(req.body)
    .then(result => {
      res.send({
        message: 'Berhasil membuat dosen',
        result
      })
    })
    .catch(error => {
      res.send({
        message: 'Gagal membuat dosen',
        error: error.stack
      })
    })
  },

}