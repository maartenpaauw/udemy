// NPM
const yargs = require('yargs')

// Custom
const geocode = require('./geocode/geocode')

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
    console.log(JSON.stringify(results, undefined, 2))
  }
})
