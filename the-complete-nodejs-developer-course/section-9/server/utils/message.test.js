const expect = require('expect')
const { generateMessage, generateLocationMessage } = require('./message')

describe('generateMessage()', () => {

  it('should generate correct message object', () => {
    const from = 'maartenpaauw'
    const text = 'Hello world!'
    const message = generateMessage(from, text)
    expect(message).toInclude({ from, text })
    expect(message.created_at).toBeA('number')
  })

})

describe('generateLocationMessage()', () => {
  it('should generate correct location object', () => {
    const from = 'maartenpaauw'
    const latitude = 12
    const longitude = 34
    const url = 'https://www.google.com/maps?q=12,34'
    const message = generateLocationMessage(from, latitude, longitude)
    expect(message).toInclude({ from, url })
    expect(message.created_at).toBeA('number')
  })
})