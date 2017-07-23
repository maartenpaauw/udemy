const fs = require('fs')
const os = require('os')

console.log('Starting application...')

const user = os.userInfo()

fs.appendFile('greetings.txt', `Hello ${user.username}!`, (err) => {
  if (err) console.log(err.message)
})
