const Mahasiswa = require('../../models/mahasiswa')

module.exports = {
  getAllMahasiswa: (req, res) => {
    Mahasiswa.find()
    .select("-password -createdAt -updatedAt")
    .then(result => 
      res.send({
        message: "you get all users",
        result
      })
    )
    .catch(error => {
      res.send({
        message: "something error when get all user",
        error: error.message
      })
    })
  },

  getMahasiswa: (req, res) => {
    Mahasiswa.findOne({ _id: objectId(req.params.id) })
      // .populate("appointments", "-updatedAt -user")
      // .populate({ path: "appointments", populate: { path: "barbershop" } })
      .then(result => 
        res.send({
          message: "here the user",
          result
        })
      )
      .catch(error => {
        res.send({
          message: "User not found",
          error: error.message
        });
      });
  },

  addMahasiswa: (req, res) => {
    Mahasiswa.create(req.body)
    .then(result => {
      res.send({
        message: 'user created',
        result
      })
    })
    .catch(error => {
      res.send({
        message: 'user failed to add',
        error: error.stack
      })
    })
  },

}