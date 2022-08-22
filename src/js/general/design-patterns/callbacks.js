'use strict'
// CPS Continuation-Passing Style Callbacks
function syncSum(num1, num2, cb) {
  try {
    if (Number.isInteger(num1) || Number.isInteger(num2)) {
      throw 'Arguments must be INTEGER values'
    }
    const data = num1 + num2
    cb(null, data)
  } catch (error) {
    cb(error)    
  }
}

function asyncSum(num1, num2, cb) {
  // We guarantee that a callback is invoked asynchronously by deferring its execution
  // using process.nextTick() or setImmediate(). Note: bear in mind that both works different
  process.nextTick(() => {
  // setImmediate(() => {
    try {
      if (Number.isInteger(num1) || Number.isInteger(num2)) {
        throw 'Arguments must be INTEGER values'
      }
      const data = num1 + num2
      cb(null, data)
    } catch (error) {
      cb(error)    
    }
  })
}

function callBack(error, result) {
  if (error) {
    console.error('Wooops!')
    // throw error
  } else {
    console.log('Result:', result)
  }
}

console.log('start')
asyncSum(1, null, callBack)
syncSum(3, 4, callBack)
syncSum(5, 6, callBack)
// If an error is thrown from inside the callback function it behaves like an uncaughtException
asyncSum(7, null, callBack)
console.log('end')

// start
// Result: 7
// Result: 11
// end
// Wooops!
// on uncaughtException: Arguments must be INTEGER values

// This way we try to catch the uncontrolled exceptions
process.on('uncaughtException', err => {
  console.error('on uncaughtException:', err)
  process.exit(1)
})
