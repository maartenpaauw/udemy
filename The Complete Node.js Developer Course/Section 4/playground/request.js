const request = require('request')

var geocodeAdress = (address) => {
  return new Promise((resolve, reject) => {
    request({
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to Google Services...')
      }

      else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address...')
      }

      else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        })
      }
    })
  })
}

geocodeAdress('2231HN').then((results) => {
  console.log(JSON.stringify(results, undefined, 2))
}, (error) => {
  console.log('Failed:', error)
})
