'use strict'

function sleep(miliseconds, shouldResolve = true, resolveValue = true, rejectionMessage = 'Promise Rejected') {
  return new Promise((resolve, reject) => {
    // setTimeout(function() {
    setTimeout(() => {
      // console.log(this)
      if (shouldResolve) resolve(resolveValue)
      else reject(rejectionMessage)
    }, miliseconds)
  })
}

// sleep(1000)
//   .then(
//     console.log, // On Fulfilled
//     reason => { console.error(reason); throw reason; } // On Rejected
//   )
//   .catch(err => console.error('on catch:', err))// On thrown error

module.exports = {
  sleep
}
