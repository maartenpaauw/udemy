// Build in
const fs = require('fs')
const os = require('os')

// Own
const notes = require('./notes')

console.log('Starting application...')

var res = notes.addNote()
console.log(res)

console.log('Result:', notes.sum(9, -2))

// const user = os.userInfo()

// fs.appendFile('greetings.txt', `Hello ${user.username}! Your are ${notes.age}.`, (err) => {
//   if (err) console.log(err.message)
// })
