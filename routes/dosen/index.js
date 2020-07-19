var express = require('express');
var router = express.Router();

var {
  getDosen,
  getAllDosen,
  addDosen,
  deleteDosen,
  updateDosen,
} = require('./controller')

router.get('/', getAllDosen);
router.get('/:id', getDosen);
router.post('/', addDosen);
// router.delete('/:id', deleteDosen);
// router.put('/:id', updateDosen);

module.exports = router;
