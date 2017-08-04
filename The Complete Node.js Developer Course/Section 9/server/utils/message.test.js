const expect = require('expect')
const { generateMessage } = require('./message')

describe('generateMessage()', () => {

  it('should generate correct message object', () => {
    const from = 'maartenpaauw'
    const text = 'Hello world!'
    const message = generateMessage(from, text)
    expect(message).toInclude({ from, text })
    expect(message.created_at).toBeA('number')
  })

})