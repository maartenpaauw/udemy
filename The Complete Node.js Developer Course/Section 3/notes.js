const fs = require('fs')

var fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString)
  } catch (e) {
    return []
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

var addNote = (title, body) => {
  let notes = fetchNotes()
  const note = {
    title,
    body
  }
  const duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

var getAll = () => {
  console.log('Getting all notes...')
}

var getNote = (title) => {
  const notes = fetchNotes()
  return notes.filter((note) => note.title === title)[0]
}

var removeNote = (title) => {
  const notes = fetchNotes()
  const filteredNotes = notes.filter((note) => note.title !== title)
  saveNotes(filteredNotes)

  return notes.length !== filteredNotes.length
}

var logNote = (note) => {
    console.log('--')
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}
