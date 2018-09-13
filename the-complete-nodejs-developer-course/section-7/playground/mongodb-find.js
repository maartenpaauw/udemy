const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongo DB server...')
  }
  console.log('Connected to MongoDB server.')

  // db.collection('todos')
  //   .find({ 
  //     _id: new ObjectID('597dd19249b9a79bc32df505') 
  //   })
  //   .toArray()
  //   .then((docs) => {
  //     console.log(docs)
  //   }, (err) => {
  //     console.log(err)
  //   })

  db.collection('todos')
    .find()
    .count()
    .then((docs) => {
      console.log(docs)
    }, (err) => {
      console.log(err)
    })


  db.collection('users')
    .find({ name: 'Maarten Paauw' })
    .toArray()
    .then((docs) => {
      console.log(docs)
    }, (err) => {
      console.log(err)
    })

  db.close()
})
