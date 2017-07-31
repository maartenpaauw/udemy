const expect = require('expect')
const request = require('supertest')
const { ObjectID } = require('mongodb')

const { app } = require('./../server')
const { Todo } = require('./../models/todo')

const todos = [
  { _id: new ObjectID(), text: "TODO 1" },
  { _id: new ObjectID(), text: "TODO 2" },
  { _id: new ObjectID(), text: "TODO 3" },
  { _id: new ObjectID(), text: "TODO 4" },
  { _id: new ObjectID(), text: "TODO 5" }
]

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos)
  }).then(() => done())
})

describe('Server', () => {

  describe('POST /todos', () => {
    
    it('should create a new todo', (done) => {
      const text = 'Go to the store'

      request(app)
        .post('/todos')
        .send({
          text
        })
        .expect(200)
        .expect((res) => {
          expect(res.body.text).toBe(text)
        })
        .end((err, res) => {
          if (err) {
            return done(err)
          }

          Todo.find({ text }).then((todos) => {
            expect(todos.length).toBe(1)
            expect(todos[0].text).toBe(text)
            done()
          }).catch((err) => done(err))
        })
    })

    it('should not create todo with invalid body data', (done) => {
      request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
          if (err) {
            return done(err)
          }

          Todo.find().then((todos) => {
            expect(todos.length).toBe(5)
            done()
          }).catch((err) => done(err))
        })
    })
  })

  describe('GET /todos', () => {
    it('should get all todos', (done) => {
      request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
          expect(res.body.todos.length).toBe(5)
        })
        .end(done)
    })
  })

  describe('GET /todos/:id', () => {
    
    it('should return todo document', (done) => {
      request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res) => {
          expect(res.body.todo.text).toBe(todos[0].text)
        })
        .end(done)
    })

    it('should return 404 if todo not found', (done) => {
      const id = new ObjectID().toHexString()

      request(app)
        .get(`/todos/${id}`)
        .expect(404)
        .end(done)
    })

    it('should return 404 for non-object ids', (done) => {
      request(app)
        .get('/todos/1234567890')
        .expect(404)
        .end(done)
    })
  })
})
