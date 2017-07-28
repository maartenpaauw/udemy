const express = require('express')
const hbs = require('hbs')

const app = express()

hbs.registerPartials(`${__dirname}/views/partials`)
app.set('view engine', 'hbs')
app.use(express.static(`${__dirname}/public`))

hbs.registerHelper('year', () => {
  return new Date().getFullYear()
})

hbs.registerHelper('uppercase', (text) => {
  return text.toUpperCase()
})

app.get('/', (req, res) => {
  res.render('home.hbs', {
    title: 'Home',
    welcome: 'Welcome to my website.'
  })
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    title: 'About'
  })
})

app.get('/bad', (req, res) => {
  res.send({
    code: 400,
    message: 'Unable to handle request...'
  })
})

app.listen(3000, () => {
  console.log('Server is up on:', 'http://localhost:3000/')
})
