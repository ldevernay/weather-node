const request = require('request');
const yargs = require('yargs');

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

let encodedAddress = encodeURIComponent(argv.a);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address= ${encodedAddress}`,
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to Google servers.');
  } else if (body.status === 'ZERO_RESULTS'){
    console.log('Unable to find this address.');
  } else if (body.status === 'OK') {
    let result = body.results[0];
    // console.log(JSON.stringify(, undefined, 2));
    console.log(`
      Address: ${result.formatted_address}
      Latitude: ${result.geometry.location.lat}
      Longitude: ${result.geometry.location.lng}
      `);
    }
  });
