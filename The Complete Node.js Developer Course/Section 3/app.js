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
    console.log('Created!')
    notes.logNote(note)
  } else {
    console.log('Duplicate note...')
  }
}

else if (command === 'list') {
  notes.getAll()
}

else if (command === 'read') {
  const note = notes.getNote(argv.title)

  if (note) {
    console.log('Found!')
    notes.logNote(note)
  } else {
    console.log('Note not found...')
  }
}

else if (command === 'remove') {
  const removed = notes.removeNote(argv.title)
  console.log(removed ? 'Note was removed!' : 'Note not found...')
}

else {
  console.log('Command not found...')
}
