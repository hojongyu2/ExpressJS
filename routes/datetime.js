var express = require('express');
var router = express.Router();
let date = new Date()

/* GET datetime listing. */
router.get('/', function(req, res, next) {
  res.send(date);
});

module.exports = router;
