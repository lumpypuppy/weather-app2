const request = require('request');

var getWeather = (lat, lng, callback)=>{
    request({
        url:`https://api.darksky.net/forecast/66899a3edb19a1cb33233ee26d5b830b/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200)
        {
            callback(`Todays temperature is: ${body.currently.temperature} F, but it feels like ${body.currently.apparentTemperature} F.`);
        }else
        {
            callback('Unable to fetch weather.');
        }
    });      
};

module.exports.getWeather = getWeather;