const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongo DB server...')
  }
  console.log('Connected to MongoDB server.')

  db.collection('todos')
    .deleteMany({
      text: 'TODO 1'
    })
    .then((result) => {
      console.log(result)
    })

  db.collection('todos')
    .deleteOne({
      text: 'TODO 1'
    })
    .then((result) => {
      console.log(result)
    })

  db.collection('todos')
    .findOneAndDelete({
      text: 'TODO 2'
    })
    .then((result) => {
      console.log(result)
    })

  db.close()
})
