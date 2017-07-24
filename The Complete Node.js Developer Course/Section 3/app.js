// Build in
const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

const argv = yargs.argv
const command = argv._[0]

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log('Created...')
    console.log('--')
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
  } else {
    console.log('Duplicate note...')
  }
}

else if (command === 'list') {
  notes.getAll()
}

else if (command === 'read') {
  notes.getNote(argv.title)
}

else if (command === 'remove') {
  notes.removeNote(argv.title)
}

else {
  console.log('Command not found...')
}
