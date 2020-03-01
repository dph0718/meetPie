var express = require('express');
var router = express.Router();
var path = require('path');
const maps = require('./maps/maps')


/* GET home page. */
router.get('/', function (req, res, next) {
  console.log("The first Get request has come through.");

  // res.send("Get a better response.")
  res.sendFile(path.join(__dirname, '../react/build', 'index.html'))
});

router.use("/maps", maps )

module.exports = router;
