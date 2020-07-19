var express = require('express');
var router = express.Router();

var {
  postKehadiranIn,
  postKehadiranOut
} = require('./controller')

router.post('/in/:idMahasiswa', postKehadiranIn);
router.post('/out/:idMahasiswa', postKehadiranOut);

module.exports = router;
