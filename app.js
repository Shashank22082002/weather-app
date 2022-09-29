const request = require('request')
const geofunc = require('./utils/geocode')
const forefunc = require('./utils/forecast')
// const url = 'https://api.open-meteo.com/v1/forecast?latitude=28.6353&longitude=77.2250&current_weather=true&hourly=temperature_2m,precipitation'

// const geourl = 'http://api.positionstack.com/v1/forward?access_key=a77413861083a855c725eea35a9e2c69&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC'

// request({ url: url, json: true }, (err, response) => {
//     // 3 possibilities
//     if (err) {
//         // low level error -- connection issues
//         console.log("Unable to connect to weather services")
//     }
//     else if (response.body.error){
//         console.log("Some error occured!", response.body.reason)
//     }
//     else {
//         const obj = response.body
//         console.log("It is currently", obj.current_weather.temperature, "C out.")
//     }
// })

// request({ url: geourl, json: true }, (err, response) => {
//     if (err) {
//         // low level error -- connection issues
//         console.log("Unable to connect to weather services")
//     }
//     else if (response.body.error) {
//         console.log("Some error occured!", response.body.message)
//     }
//     else {
//         const objData = response.body.data
//         // console.log(objData[0])
//         console.log('Latitude is:', objData[0].latitude, ' Longitude is:', objData[0].longitude)
//     }
// })

geofunc('Yakutsk', (err, response) => {
    if (err) {
        console.log('Error occured!', err)
    }
    else {
        console.log('Latitude is:', response.latitude, ' Longitude is:', response.longitude, ' Location Detected is:', response.location)
        forefunc(response.latitude, response.longitude, (err, response) => {
            if (err)
                console.log(err)
            else {
                console.log(response)
            }
        })
    }
})