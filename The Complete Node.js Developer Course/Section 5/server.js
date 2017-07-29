const express = require('express')
const hbs = require('hbs')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 3000

hbs.registerPartials(`${__dirname}/views/partials`)
app.set('view engine', 'hbs')

app.use((req, res, next) => {
  const now = new Date().toString()
  const message = `${now}: ${req.method} ${req.url}`
  console.log(message)

  fs.appendFileSync('server.log', `${message}\n`)
  next()
})

// app.use((req, res, next) => {
//   res.render('maintenance.hbs')
// })

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

app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
    title: 'Projects'
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

app.listen(port, () => {
  console.log('Server is up on:', `http://localhost:${port}/`)
})
