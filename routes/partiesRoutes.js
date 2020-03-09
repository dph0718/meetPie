var express = require('express');
var router = express.Router();

router.post('/createParty', (req, res) => {
    res.send("Response sent for Create Party")
})

router.post('/readParty', (req, res) => {
    res.send("Response sent for Read Party")
})

router.post('/updateParty', (req, res) => {
    res.send("Response sent for update Party")
})

router.post('/deleteParty', (req, res) => {
    res.send("Response sent for delete Party")
})

module.exports = router;