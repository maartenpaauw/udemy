// // NPM
const yargs = require('yargs')

// // Custom
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

// .env
require('dotenv').config()

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv

geocode.geocodeAddress(argv.address, (error, results) => {
  if (error) {
    console.log(error)
  } else {
    console.log(results.address)
    weather.getWeather(process.env.DARK_SKY_API_KEY, results.latitude, results.longitude, (error, results) => {
      if (error) {
        console.log(error)
      } else {
        console.log(`It's currently ${results.temperature}. It feels like ${results.apparentTemperature}.`)
      }
    })
  }
})
