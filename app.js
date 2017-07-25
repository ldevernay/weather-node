// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode');
//
// const argv = yargs
// .options({
//   a: {
//     demand: true,
//     alias: 'address',
//     describe: 'Address to fetch weather for',
//     string: true
//   }
// })
// .help()
// .alias('help', 'h')
// .argv;
//
// geocode.geocodeAddress(argv.a, (errorMessage, results) => {
//   if (errorMessage){
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });
//
// // API key : da18cab2040b7f77c3200b4908a0bca7

const request = require('request');

request({
  url: `https://api.forecast.io/forecast/da18cab2040b7f77c3200b4908a0bca7/43.1337266,0.7152748999999999`,
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200){
    console.log(body.currently.temperature);
  } else {
    console.log('Unable to fetch weather.');
  }
});
