const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

let encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address= ${encodedAddress}`;

axios.get(geocodeUrl)
.then((response) => {
  if (response.data.status === 'ZERO_RESULTS'){
    throw new Error('Address not found.');
  }
  var result = response.data.results[0];
  var lat = result.geometry.location.lat;
  var lng = result.geometry.location.lng;
  var weatherURL = `https://api.forecast.io/forecast/da18cab2040b7f77c3200b4908a0bca7/${lat},${lng}`
  console.log(result.formatted_address)
  // console.log(JSON.stringify(response.data, undefined, 2));
  return axios.get(weatherURL);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`Temperature: ${temperature}
  Apparent temperature: ${apparentTemperature}`);
  })
  .catch((error) => {
    if (error.code === 'ENOTFOUND'){
      console.log('Unable to connect to API servers.');
    } else {
      console.log(error.message);
    }
  })
