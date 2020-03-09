// var express = require('express');
// var router = express.Router();
// var path = require('path');

// /* GET users listing. */
// router.get('/', function (req, res, next) {
//   console.log(`Users has been hit. hard.`);

//   // res.sendFile(path.join(__dirname, '../react/build', 'index.html'))

//   res.send('respond with a resource');
// });

var express = require('express');
var router = express.Router();

router.post('/createUser', (req, res) => {
  res.send("Response sent for Create User")
})

router.post('/readUser', (req, res) => {
  res.send("Response sent for Read User")
})

router.post('/updateUser', (req, res) => {
  res.send("Response sent for update User")
})

router.post('/deleteUser', (req, res) => {
  res.send("Response sent for delete User")
})

module.exports = router;