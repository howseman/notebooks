// Promises has 4 possible status:
// Fulfilled: Resolved successfully
// Rejected: Something went bad
// Pending: Still waiting for a result
// Settled: Something happened. Promise was either, fulfilled or rejected

// Promises are executed in the main thread

const { sleep } = require('../../utils/sleep')

// Note: .then(undefined, rejectionHandlerFunction)
// behaves exactly like: .catch(rejectionHandlerFunction)
sleep(300, true)
  .then(result => { throw 'Thrown error!' })
  .then(undefined, console.error) // this syntax behaves EXACTLY like .catch()
  .catch(err => console.error('Catch:', err)) // this is never called
// Logs: Thrown error!

// sleep(1000, true, 1000)
//   .then(result => sleep(500, false))
//   .then(undefined, console.error)
//   .then(console.log)
//   .catch(err => console.error('Catch:', err))
