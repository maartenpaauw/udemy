// Build in
const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

const title = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}

const body = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
}

const argv = yargs
  .command('add', 'Add a new note', {
    title,
    body
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title
  })
  .command('remove', 'Remove a note', {
    title
  })
  .help()
  .argv

const command = argv._[0]

yargs.command()

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
  const all = notes.getAll()
  console.log(`Printing ${all.length} note(s).`)
  all.forEach((note) => notes.logNote(note))
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
