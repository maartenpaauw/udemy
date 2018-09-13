const expect = require('expect')
const rewire = require('rewire')
const app = rewire('./app')

describe('App', () => {

  const db = {
    saveUser: expect.createSpy()
  }
  app.__set__('db', db)

  it('should call the spy correctly', () => {
    const spy = expect.createSpy()
    spy('Maarten', 24)
    expect(spy).toHaveBeenCalledWith('Maarten', 24)
  })

  it('should call saveUser with user object', () => {
    const email = 'maartenpaauw@gmail.com'
    const password = 'hello-world'

    app.handleSignup(email, password)
    
    expect(db.saveUser).toHaveBeenCalledWith({
      email,
      password
    })
  })

})
