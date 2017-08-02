const { ObjectID } = require('mongodb')
const jwt = require('jsonwebtoken')

const { User } = require('./../../models/user')
const { Todo } = require('./../../models/todo')

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
    password: 'hello-world-2',
    tokens:[{
      access: 'auth',
      token: jwt.sign({
        _id: userTwoId,
        access: 'auth'
      }, 'secret').toString()
    }]
  }
]

const todos = [
  { _id: new ObjectID(), text: "TODO 1", _creator: userOneId },
  { _id: new ObjectID(), text: "TODO 2", _creator: userOneId },
  { _id: new ObjectID(), text: "TODO 3", _creator: userOneId },
  { _id: new ObjectID(), text: "TODO 4", completed: true, completedAt: 333, _creator: userTwoId },
  { _id: new ObjectID(), text: "TODO 5", completed: true, completedAt: 333, _creator: userTwoId }
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
