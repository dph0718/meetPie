var express = require('express');
var router = express.Router();
var path = require('path');
const maps = require('./maps/maps')

var usersRouter = require('./usersRoutes');
var eventsRouter = require('./eventsRoutes')
var partiesRouter = require('./parties')

router.use("/maps", maps )
router.use('/users', usersRouter);
router.use('/events', eventsRouter)
router.use('/parties', partiesRouter)


/* GET home page. */
router.get('/', function (req, res, next) {
  console.log("The first Get request has come through.");

  // res.send("Get a better response.")
  res.sendFile(path.join(__dirname, '../react/build', 'index.html'))
});


module.exports = router;
