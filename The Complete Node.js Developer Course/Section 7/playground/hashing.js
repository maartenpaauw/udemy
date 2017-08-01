const { SHA256 } = require('crypto-js')
const jwt = require('jsonwebtoken')

var data = {
  id: 10
}

const token = jwt.sign(data, 'secret')
console.log(token)

const decoded = jwt.verify(token, 'secret')
console.log(decoded)

// const message = 'I am user number 3'
// const hash = SHA256(message).toString()

// console.log('Message:', message)
// console.log('Hash:', hash)

// var data = {
//   id: 4
// }

// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'secret').toString()
// }

// token.data.id = 5
// token.hash = SHA256(JSON.stringify(token.data)).toString()

// var resultHash = SHA256(JSON.stringify(token.data) + 'secret').toString()

// if (resultHash === token.hash) {
//   console.log('Same')
// } else {
//   console.log('Not the same')
// }