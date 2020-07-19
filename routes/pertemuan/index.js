var express = require('express');
var router = express.Router();

var {
  getPertemuan,
  getAllPertemuan,
  addPertemuan,
  deletePertemuan,
  updatePertemuan,
} = require('./controller')

router.get('/', getAllPertemuan);
router.get('/:id', getPertemuan);
router.post('/', addPertemuan);
// router.delete('/:id', deletePertemuan);
// router.put('/:id', updatePertemuan);

module.exports = router;
