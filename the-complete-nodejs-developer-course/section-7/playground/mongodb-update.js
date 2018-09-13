const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongo DB server...')
  }
  console.log('Connected to MongoDB server.')

  db.collection('todos')
    .findOneAndUpdate({
      _id: new ObjectID('597ddfe95bbfe5a327a9f694')
    },
    {
      $set: {
        completed: true
      }
    },
    {
      returnOriginal: false
    })
    .then((result) => {
      console.log(result)
    })

  db.collection('users')
    .findOneAndUpdate({
      _id: new ObjectID('597dd25939abc89c1ebe3972')
    },
    {
      $set: {
        name: 'Rianne van der Maat'
      },
      $inc: {
        age: -1
      }
    },
    {
      returnOriginal: false
    })
    .then((result) => {
      console.log(result)
    })

  db.close()
})
