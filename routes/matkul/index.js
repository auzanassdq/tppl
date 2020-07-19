var express = require('express');
var router = express.Router();

var {
  getMatkul,
  getAllMatkul,
  addMatkul,
  deleteMatkul,
  updateMatkul,
} = require('./controller')

router.get('/', getAllMatkul);
router.get('/:id', getMatkul);
router.post('/', addMatkul);
router.delete('/:id', deleteMatkul);
// router.put('/:id', updateMatkul);

module.exports = router;
