const request = require('request')


const geocode = (address,callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiNG00cmFydHMiLCJhIjoiY2t4azQ0eGhmMGN2MDJ4b2I0aHdwa3MzbiJ9.QOCIT_T4DoaqJmv_98xENg`

    request({ url, json:true}, (error, response) => {
        if(error){
            callback("Unable to connect to location service")
        }
        else if(response.body.features.length ===0){
            callback('Unable to find location. Try another location')
        }
        else{
           
            const latitude = response.body.features[0].center[1]
            const longitude = response.body.features[0].center[0]
            const place = response.body.features[0].place_name
            callback(undefined,{latitude,longitude,place})
   
        }
    })
}


module.exports = geocode