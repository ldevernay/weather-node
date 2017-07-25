const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
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
.argv;

// geocode.geocodeAddress(argv.a, (errorMessage, results) => {
//   if (errorMessage){
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

weather.getWeather(43.1337266, 0.7152748999999999, (errorMessage, weatherResults) => {
  if (errorMessage){
    console.log(errorMessage);
  } else {
    console.log(`
      Temperature: ${weatherResults.temperature}
      Apparent temperature: ${weatherResults.apparentTemperature}`);
  }
});
