// var obj = { name: 'Maarten' }
// var stringObj = JSON.stringify(obj)

// console.log(typeof stringObj, ':', stringObj)

// var stringPerson = '{"name": "Maarten"}'
// var person = JSON.parse(stringPerson)

// console.log(typeof person, ':', person)

const fs = require('fs')

var originalNote = {
  title: 'Some title',
  body: 'Some body'
}

var originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json', originalNoteString)
var noteString = fs.readFileSync('notes.json')
var note = JSON.parse(noteString)

console.log(typeof note, ':', note)