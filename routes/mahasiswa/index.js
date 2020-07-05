var express = require('express');
var router = express.Router();

var {
  getMahasiswa,
  getAllMahasiswa,
  addMahasiswa,
  deleteMahasiswa,
  updateMahasiswa,
} = require('./controller')

router.get('/', getAllMahasiswa);
router.get('/:id', getMahasiswa);
router.post('/', addMahasiswa);
// router.delete('/:id', deleteMahasiswa);
// router.put('/:id', updateMahasiswa);

module.exports = router;
