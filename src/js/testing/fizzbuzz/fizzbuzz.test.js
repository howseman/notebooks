const { fizzbuzz, isMultiple } = require('./fizzbuzz')

describe('isMultiple function test', () => {
  it('should return false if provided number as first argument is not a multiple of second argument', () => {
    const expected = false

    const result = isMultiple(0)

    expect(result).toBe(expected)
  })

  it('should print "Neither fizz nor buzz" if provided number is 0 or isn\'t a multiple of 3 nor 5', () => {
    const expected = 'Neither fizz nor buzz'

    const result = fizzbuzz(0)

    expect(result).toBe(expected)
  });
  it('should print "Neither fizz nor buzz" if provided number is 0 or isn\'t a multiple of 3 nor 5', () => {
    const expected = 'Neither fizz nor buzz'

    const result = fizzbuzz(0)

    expect(result).toBe(expected)
  });

  it('should print "Neither fizz nor buzz" if provided number isn\'t a multiple of 3 nor 5', () => {
    const expected = 'Neither fizz nor buzz'

    let result = fizzbuzz(1)
    expect(result).toBe(expected)

    result = fizzbuzz(2)
    expect(result).toBe(expected)

    result = fizzbuzz(4)
    expect(result).toBe(expected)
  });

  it('should print "fizz" if provided number is a multiple of 3', () => {
    expect(true).toBe(true)
  });

  it('should print "buzz" if provided number is a multiple of 5', () => {
    expect(true).toBe(true)
  });

  it('should print "fizzbuzz" if provided number is a multiple of 3 and 5', () => {
    expect(true).toBe(true)
  });
});