const expect = require('expect')
const { isRealString } = require('./validation')

describe('isRealString()', () => {

  it('should reject non-string values', () => {
    expect(isRealString(true)).toBe(false)
    expect(isRealString(false)).toBe(false)
    expect(isRealString(69)).toBe(false)
  })

  it('should reject string with only spaces', () => {
    expect(isRealString('          ')).toBe(false)
  })

  it('should reject an empty string', () => {
    expect(isRealString('')).toBe(false)
  })

  it('should allow string with non-space characters', () => {
    expect(isRealString('Hello world!')).toBe(true)
  })

})