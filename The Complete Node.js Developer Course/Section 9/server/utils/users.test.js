const expect = require('expect')
const { Users } = require('./users')

describe('Users', () => {

  describe('Users.addUser()', () => {

    it('should add new user', () => {
      const users = new Users()
      const user = {
        id: 69,
        name: 'Maarten',
        room: 'Blink-182'
      }
      users.addUser(user.id, user.name, user.room)
      expect(users.users).toEqual([user])
    })

  })

})