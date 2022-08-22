console.log('starting...')
Promise.resolve(process.nextTick(cb))
console.log('end');
console.log('after end');

function cb() {
  console.log('callback executed from nextTick')
  // console.log('.env:', process.env);
}

// setInterval
// setImmediate
// setTimeout