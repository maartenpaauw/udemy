const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

const id = '597dfbc09d08e5b3a3c9e5fe'

Todo.remove({}).then((res) => {
  console.log(res)
})

Todo.findByOneAndRemove({
  _id: id
}).then((res) => {
  console.log(res)
})

Todo.findByIdAndRemove(id).then((res) => {
  console.log(res)
})
