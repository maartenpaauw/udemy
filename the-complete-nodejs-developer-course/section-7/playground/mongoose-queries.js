const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

const id = '597dfbc09d08e5b3a3c9e5fe'

if (!ObjectID.isValid(id)) {
  console.log('ID not valid.')
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos:', todos)
})

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo:', todo)
})

Todo.findById(id).then((todo) => {

  if (!todo) {
    return console.log('ID not found.')
  }

  console.log('Todo by id:', todo)
}).catch((e) => console.log(e.message))

User.findById('597de974c14f78a88a5fe09a').then((user) => {
  if (!user) {
    return console.log('User not found.')
  }

  console.log(user)

}, (e) => {
  console.log(e)
})
