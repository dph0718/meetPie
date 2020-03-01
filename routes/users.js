var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(`Users has been hit. hard.`);
  
  // res.sendFile(path.join(__dirname, '../react/build', 'index.html'))

  res.send('respond with a resource');
});

module.exports = router;
