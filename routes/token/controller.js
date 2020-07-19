const jwt = require("jsonwebtoken");
const Pertemuan = require("../../models/pertemuan");

module.exports = {
  getTokenIn: async (req, res) => {
    try {
      const token = jwt.sign(
        {
          idPertemuan: req.params.idPertemuan,
        },
        "tppl",
        {
          expiresIn: "1h",
        }
      );

      res.send({
        message: "Sukses generate token IN",
        token,
      });
    } catch (err) {
      res.send({
        message: "gagal generate token",
        error: err,
      });
    }
  },

  getTokenOut: async (req, res) => {
    try {
      const token = jwt.sign(
        {
          idPertemuan: req.params.idPertemuan,
        },
        "tppl",
        {
          expiresIn: "1h",
        }
      );

      res.send({
        message: "Sukses generate token OUT",
        token,
      });
    } catch (err) {
      res.send({
        message: "gagal generate token",
        error: err,
      });
    }
  },
};
