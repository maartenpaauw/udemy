const expect = require('expect')
const utils = require('./utils')

it('should add two numbers', () => {
  const res = utils.add(33, 11)
  expect(res).toBe(44).toBeA('number')
})

it('should subtract two numbers', () => {
  const res = utils.subtract(33, 11)
  expect(res).toBe(22).toBeA('number')
})

it('should square two numbers', () => {
  const res = utils.square(2, 2)
  expect(res).toBe(4).toBeA('number')
})

it('should expect some values', () => {
  expect(12).toNotBe(11)
  expect({name: 'Maarten'}).toEqual({name: 'Maarten'})
  expect([1, 2, 3, 4]).toInclude(3)
})

it('should have a valid user object', () => {
  expect({firstName: 'Maarten', lastName: 'Paauw'})
    .toInclude(utils.setName({}, "Maarten Paauw"))
    .toBeA('object')
})
