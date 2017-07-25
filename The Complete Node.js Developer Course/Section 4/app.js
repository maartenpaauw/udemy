const request = require('request')

request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=37%20brouwerstraat%20nederland',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2))
})
