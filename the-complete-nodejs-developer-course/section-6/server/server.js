const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'TODO App v1.0'
  })
})

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'Maarten Paauw',
      age: 24
    },
    {
      name: 'Rianne van der Maat',
      age: 23
    }
  ])
})

app.listen(3000, () => {
  console.log('Server up and running on http://localhost:3000/')
})

module.exports.app = app
