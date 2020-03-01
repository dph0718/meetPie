const router = require('express').Router()
const Client = require("@googlemaps/google-maps-services-js").Client
const client = new Client({})
require('dotenv').config()

router.post('/geocode', (req, res) => {
    const address = req.body.address
    client
        .geocode({
            params: {
                address: address,
                key: process.env.GOOGLE_API_KEY
            }
        })
        .then(response => {
            console.log(response.data.results[0].geometry.location)
            let coordinates = response.data.results[0].geometry.location
            let coords = {
                lat: coordinates.lat,
                lng: coordinates.lng
            };
            res.send(coords)
        })
        .catch(err => console.log(err))
})

router.post('/places', (req, res) => {
    data = req.body;
    console.log(data)

    let locationCoords = `${data.latitude},${data.longitude}`
    client
        .placesNearby({
            params: {
                key: process.env.GOOGLE_API_KEY,
                // location: { lat: data.latitude, lng: data.longitude },
                location: locationCoords,
                radius: data.radius,
                type: data.type,
            }
        })
        .then(response => {
            console.log("Places API request succeeded.");
            res.send(response.data.results)
        })
        .catch(err => {
            console.log(err);
            console.log("The GOOGLE REQUEST messed up.");
        })
})

router.post('/distance', (req, res) => {
    let data = req.body
    let lat = data.latitude || 0
    let lng = data.longitude || 0

    // let locationCoords = `${lat},${lng}`
    let locationCoords = [`39.69654630000001,-105.0563122`]
    // let desinationId = 'place_id:45e93b7a98973d27b98946ae2974e7a4f808de6e'
    let desinationId = ['39.6916334,-105.0536866']
    // let desinationId = '1395 S Sheridan Blvd, Lakewood, CO 80232'

    client
        .distancematrix({
            params: {
                key: process.env.GOOGLE_API_KEY,
                origins: locationCoords,
                destinations: desinationId
            }
        }).then(response => {
            console.log(`The distance matrix request was good.`);
            console.log(response);

            res.send(response.data)
        }).catch(err => {
            console.log(err);
            console.log(`The distancematrix request didn't go well..`);
            res.err("dammit. ")

        })
})


module.exports = router;