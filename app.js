const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1+place+marechal+juin+31800+Saint-Gaudens',
  json: true
}, (error, response, body) => {
  // console.log(JSON.stringify(body, undefined, 2));
  let result = body.results[0];
  console.log(`
    Address: ${result.formatted_address}
    Latitude: ${result.geometry.location.lat}
    Longitude: ${result.geometry.location.lng}
    `);
});
