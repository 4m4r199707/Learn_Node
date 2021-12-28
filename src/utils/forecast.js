const request = require('request')

const forecast = (latitude,longitude,callback) =>{
    const url = `http://api.weatherstack.com/current?access_key=c223b8df27dc121aec8d333d8a4da1d7&query=${latitude},${longitude}&units=m`

    request({url,json:true},(error,response) => {
        if(error){
            callback("Unable to fetch weather data")
        }
        else if(response.body.error){
            callback(response.body.error.info)
        }
        else{
            const data = response.body.current;
            const message = "It is currently "+data.temperature +" degrees out. There is a "+data.precip*100 + " % chance of rain."
            callback(undefined,message)
        }
    })
}

module.exports = forecast;