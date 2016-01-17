var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

router.get('/mnnit', function(req, res, next) {
  res.render('mnnit.html', { title: 'Express' });
});

module.exports = router;
