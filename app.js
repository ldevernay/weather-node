const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1+place+marechal+juin+31800+Saint-Gaudens',
  json: true
}, (error, response, body) => {
  console.log(body);
});
