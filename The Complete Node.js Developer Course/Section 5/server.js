const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({
    name: 'Maarten Paauw'
  })
})

app.get('/about', (req, res) => {
  res.send(`<h1>About</h1>`)
})

app.get('/bad', (req, res) => {
  res.send({
    code: 400,
    message: 'Unable to handle request...'
  })
})

app.listen(3000)
