/**
 * Definition: Currying is a functional programming pattern
 * used when you need to add arguments to a function gradually
 * https://blog.bitsrc.io/understanding-currying-in-javascript-ceb2188c339
 */

// Common function
const messageBuilder = (type, msg, timeout) =>
  `This is a [${type}] message: [${msg}], and will be hidden after [${Math.round(timeout/1000)}] seconds.`;

console.log(messageBuilder('info', 'Hello', 3000));

// Curried version of messageBuilder function
const curriedMessageBuilder = type =>
  msg =>
    timeout => 
      `This is a [${type}] message: [${msg}], and will be hidden after [${Math.round(timeout/1000)}] seconds.`;

console.log(curriedMessageBuilder('info')('Hello')(3000));

const setMessageFn = curriedMessageBuilder('info');
// ... some other logic
console.log(setMessageFn('Hello')(5000));
