const expect = require('expect')
const { Users } = require('./users')

describe('Users', () => {

  var users

  beforeEach(() => {
    users = new Users()
    users.users = [{
      id: 1,
      name: 'User 1',
      room: 'A'
    },
    {
      id: 2,
      name: 'User 2',
      room: 'B'
    },
    {
      id: 3,
      name: 'User 3',
      room: 'B'
    }]
  })

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

  describe('Users.removeUser()', () => {

    it('should remove a user', () => {
      const user = users.removeUser(1)
      expect(user.id).toBe(1)
      expect(users.users.length).toBe(2)
    })

    it('should not remove a user', () => {
      const user = users.removeUser(4)
      expect(user).toNotExist()
      expect(users.users.length).toBe(3)
    })

  })

  describe('Users.getUser()', () => {
    
    it('should find a user', () => {
      const user = users.getUser(2)
      expect(user.id).toBe(2)
    })

    it('should not find a user', () => {
      const user = users.getUser(4)
      expect(user).toNotExist()
    })

  })

  describe('Users.getUsersList()', () => {
    
    it('should return names for A', () => {
      const list = users.getUsersList('A')
      expect(list).toEqual(['User 1'])
    })

    it('should return names for B', () => {
      const list = users.getUsersList('B')
      expect(list).toEqual(['User 2', 'User 3'])
    })

  })

})