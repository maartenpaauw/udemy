const { ObjectID } = require('mongodb')
const jwt = require('jsonwebtoken')

const { Todo } = require('./../../models/todo')
const { User } = require('./../../models/user')

const todos = [
  { _id: new ObjectID(), text: "TODO 1" },
  { _id: new ObjectID(), text: "TODO 2" },
  { _id: new ObjectID(), text: "TODO 3" },
  { _id: new ObjectID(), text: "TODO 4", completed: true, completedAt: 333 },
  { _id: new ObjectID(), text: "TODO 5", completed: true, completedAt: 333 }
]

const userOneId = new ObjectID()
const userTwoId = new ObjectID()

const users = [
  {
    _id: userOneId,
    email: 'maartenpaauw@gmail.com',
    password: 'hello-world-1',
    tokens:[{
      access: 'auth',
      token: jwt.sign({
        _id: userOneId,
        access: 'auth'
      }, 'secret').toString()
    }]
  },
  {
    _id: userTwoId,
    email: 'rianne@example.com',
    password: 'hello-world-2'
  }
]

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos)
  }).then(() => done())
}

const populateUsers = (done) => {
  User.remove({}).then(() => {
    const userOne = new User(users[0]).save()
    const userTwo = new User(users[1]).save()
    return Promise.all([userOne, userTwo]).then()
  }).then(() => done())
}

module.exports = {
  todos,
  users,
  populateTodos,
  populateUsers
}
