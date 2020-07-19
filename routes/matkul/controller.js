const Matkul = require('../../models/matkul')

module.exports = {
  getAllMatkul: (req, res) => {
    Matkul.find()
    .select("-createdAt -updatedAt")
    .then(result => 
      res.send({
        message: "sukses mendapatkan semua data matkul",
        result
      })
    )
    .catch(error => {
      res.send({
        message: "Gagal mendapatkan semua data matkul",
        error: error.message
      })
    })
  },

  getMatkul: (req, res) => {
    Matkul.findOne({ _id: objectId(req.params.id) })
      // .populate("appointments", "-updatedAt -user")
      // .populate({ path: "appointments", populate: { path: "barbershop" } })
      .then(result => 
        res.send({
          message: "Sukses mendapatkan matkul",
          result
        })
      )
      .catch(error => {
        res.send({
          message: "Matkul tidak ditemukan",
          error: error.message
        });
      });
  },

  addMatkul: (req, res) => {
    Matkul.create(req.body)
    .then(result => {
      res.send({
        message: 'Berhasil membuat matkul',
        result
      })
    })
    .catch(error => {
      res.send({
        message: 'Gagal membuat matkul',
        error: error.stack
      })
    })
  },

  deleteMatkul: (req, res) => {
    Matkul.deleteOne(
      {
        _id: req.params.id
      },
      (error, result) => {
        try {
          res.send({
            message: "Berhasil dihapus",
            result
          });
        } catch (err) {
          res.send({
            error: error,
          });
        }
      }
    );
  },

}