const Pertemuan = require("../../models/pertemuan");

module.exports = {
  getAllPertemuan: (req, res) => {
    Pertemuan.find()
      .select("-updatedAt")
      .populate(
        // "kehadiran",
        // {populate: { path: 'mahasiswa' }} ,
        // "_id mahasiswa status"

        {
          path: "kehadiran",
          select: "status",
          populate: { path: "mahasiswa", select: "name" },
        }
      )
      .then((result) =>
        res.send({
          message: "sukses mendapatkan semua data pertemuan",
          result,
        })
      )
      .catch((error) => {
        res.send({
          message: "terjadi kesalahan ketika mendapatkan semua data pertemuan",
          error: error.message,
        });
      });
  },

  getPertemuan: (req, res) => {
    Pertemuan.findOne({ _id: objectId(req.params.id) })
      // .populate("appointments", "-updatedAt -user")
      // .populate({ path: "appointments", populate: { path: "barbershop" } })
      .then((result) =>
        res.send({
          message: "sukses mendapatan data pertemuan",
          result,
        })
      )
      .catch((error) => {
        res.send({
          message: "Pertemuan tidak ditemukan",
          error: error.message,
        });
      });
  },

  addPertemuan: (req, res) => {
    Pertemuan.create(req.body)
      .then((result) => {
        res.send({
          message: "Sukses membuat pertemuan",
          result,
        });
      })
      .catch((error) => {
        res.send({
          message: "Gagal membuat pertemuan",
          error: error.stack,
        });
      });
  },
};
