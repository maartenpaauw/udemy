const utils = require('./utils')

it('Should add two numbers', () => {
  const res = utils.add(33, 11)

  if (res !== 44) {
    throw new Error(`Expected 44, but got ${res}.`)
  }
})

it('Should subtract two numbers', () => {
  const res = utils.subtract(33, 11)

  if (res !== 22) {
    throw new Error(`Expected 22, but got ${res}.`)
  }
})

it('Should square two numbers', () => {
  const res = utils.square(2, 2)

  if (res !== 4) {
    throw new Error(`Expected 4, but got ${res}.`)
  }
})
