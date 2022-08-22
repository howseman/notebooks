function fizzbuzz(input) {
  let result = ''
  if (input === 0 || !isMultiple(input, 3) && !isMultiple(input, 5)) {
    result = 'Neither fizz nor buzz'
  } /*else if (input % 3 === 0) {
    result += 'fizz'
  } else if (input % 5 === 0) {
    result += 'buzz'
  } else {
    result = 'Neither fizz nor buzz'
  }*/

  return result
}

function isMultiple(input, multiple) {
  return input % multiple === 0
}

module.exports = {
  fizzbuzz,
  isMultiple,
}
