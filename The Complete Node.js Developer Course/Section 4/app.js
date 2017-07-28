// // NPM
// const yargs = require('yargs')

// // Custom
// const geocode = require('./geocode/geocode')

// .env
require('dotenv').config()

// console.log(process.env.DARK_SKY_API_KEY)

// const argv = yargs
//   .options({
//     address: {
//       demand: true,
//       alias: 'a',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv

// geocode.geocodeAddress(argv.address, (error, results) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log(JSON.stringify(results, undefined, 2))
//   }
// })

const request = require('request')

request({
  url: `https://api.darksky.net/forecast/${process.env.DARK_SKY_API_KEY}/37.8267,-122.4233`,
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature)
  }

  else {
    console.log('Unable to fetch weather...')
  }
})