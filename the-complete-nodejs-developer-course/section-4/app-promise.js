// // NPM
const yargs = require('yargs'),
      axios = require('axios')

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

axios.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address...')
  }

  const lat = response.data.results[0].geometry.location.lat,
        lng = response.data.results[0].geometry.location.lng,
        api_key = process.env.DARK_SKY_API_KEY
  console.log(response.data.results[0].formatted_address)
  return axios.get(`https://api.darksky.net/forecast/${api_key}/${lat},-${lng}`)
}).then((response) => {
  const temperature = response.data.currently.temperature,
        apparentTemperature = response.data.currently.apparentTemperature
  console.log(`It's ${temperature}, but it feels like ${apparentTemperature}.`)
})
.catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers...')
  } else {
    console.log(e.message)
  }
})
