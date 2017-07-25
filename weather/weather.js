const request = require('request');

var getWeather = (lat, lng, callback) => {
request({
  url: `https://api.forecast.io/forecast/da18cab2040b7f77c3200b4908a0bca7/${lat},${lng}`,
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200){
    let weatherResults = {
      temperature: body.currently.temperature,
      apparentTemperature: body.currently.apparentTemperature
    };
    callback(undefined, weatherResults);
  } else {
    callback('Unable to fetch weather.');
  }
});
};

module.exports.getWeather = getWeather;
