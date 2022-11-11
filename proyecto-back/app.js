var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var database = require('./config/database');
var cors = require('cors');
var auth = require('./auth/main_auth');

var usuarioRouter = require('./routes/usuario.router');
var compraRouter = require('./routes/compra.router');
var vinoRouter = require('./routes/vino.router');

var app = express();

// var indexRouter = require('./routes/index');
// app.use('/', indexRouter)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());//clase 22/11/09

//mongo connection
database.mongoConnect();
app.use('/usuario', usuarioRouter)
//app.use(auth)
//router

// app.use('/usuario', usuarioRouter);
app.use('/vino', vinoRouter);
app.use('/compra', compraRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err })
});

module.exports = app;
