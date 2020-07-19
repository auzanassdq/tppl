var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var bodyParser = require('body-parser')

// Router 
var indexRouter = require('./routes/index');
var mahasiswaRouter = require('./routes/mahasiswa')
var dosenRouter = require('./routes/dosen')
var matkulRouter = require('./routes/matkul')
var pertemuanRouter = require('./routes/pertemuan')
var tokenRouter = require('./routes/token')
var kehadiranRouter = require('./routes/kehadiran')

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/mahasiswa', mahasiswaRouter);
app.use('/dosen', dosenRouter);
app.use('/matkul', matkulRouter);
app.use('/pertemuan', pertemuanRouter);
app.use('/token', tokenRouter);
app.use('/kehadiran', kehadiranRouter);

module.exports = app;
