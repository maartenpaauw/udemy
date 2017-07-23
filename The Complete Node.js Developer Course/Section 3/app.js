// Build in
const fs = require('fs')
const os = require('os')

// NPM
const _ = require('lodash')

// Own
const notes = require('./notes')

console.log('Starting application...')

var res = notes.addNote()
console.log(res)

console.log('Result:', notes.sum(9, -2))

console.log(_.isString(true))
console.log(_.isString('Maarten Paauw'))

const filteredArray = _.uniq([1, 1, 2, 2, 3, 3, 4, 4, 5, 5])
console.log(filteredArray)
// const user = os.userInfo()

// fs.appendFile('greetings.txt', `Hello ${user.username}! Your are ${notes.age}.`, (err) => {
//   if (err) console.log(err.message)
// })
