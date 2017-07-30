const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/todo', { useMongoClient: true })

const Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
})

const todo1 = new Todo({
  text: 'TODO 1'
})

todo1.save().then((result) => {
  console.log(result)
}, (err) => {
  console.error(err)
})

const todo2 = new Todo({
  text: 'TODO 2',
  completed: true,
  completedAt: 123
})

 todo2.save().then((result) => {
  console.log(result)
}, (err) => {
  console.error(err)
})
