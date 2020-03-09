var express = require('express');
var router = express.Router();

router.post('/createEvent', (req, res) => {
    console.dir(req.body)
    res.send("Response sent for Create Event")
})

router.post('/readEvent', (req, res) => {
    res.send("Response sent for Read Event")
})

router.post('/updateEvent', (req, res) => {
    res.send("Response sent for update Event")
})

router.post('/deleteEvent', (req, res) => {
    res.send("Response sent for delete Event")
})

module.exports = router;