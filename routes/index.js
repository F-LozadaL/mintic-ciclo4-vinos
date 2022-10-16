var express = require('express');
// const { routes } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Hello World' });
  res.send("prueba sin motor de vista");
});

module.exports = router;
