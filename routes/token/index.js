var express = require('express');
var router = express.Router();

var {
  getTokenIn,
  getTokenOut
} = require('./controller')

router.get('/in/:idPertemuan', getTokenIn);
router.get('/out/:idPertemuan', getTokenOut);

module.exports = router;
