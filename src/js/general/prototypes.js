'use strict';
// Every JavaScript function is actually a Function object.
// This can be seen with the code (function(){}).constructor.name
// "Function"

// A Function's Prototype is the object instance that will become
// the prototype for all objects created using this function as a constructor.

// An Object's Prototype is the object instance from which the object is inherited.

// If we have:
function Person(name) {
  this.name = name
}
// JS creates an object in memory like
// Person = {
//   prototype: Object {
//     constructor: Ref to Person (constructor) function
//   },
// }
const john = new Person('John')

// console.log('Object.prototype:', Object.prototype)
// console.log('Object.getPrototypeOf:', Object.getPrototypeOf(Object))

// const a = {}
// function createObj() {
//   this.name = 'John'
//   this.sayNameInner = function() {
//     return this.name
//   }
// }
// createObj.prototype.sayName = function() { return this.name }
// const b = new createObj
// const c = Object.create(b)

// console.log('Object.getPrototypeOf(a):', Object.getPrototypeOf(a));
// console.log('Object.getPrototypeOf(createObj):', Object.getPrototypeOf(createObj));
// console.log('Object.getPrototypeOf(b):', Object.getPrototypeOf(b));
// console.log('Object.getPrototypeOf(c):', Object.getPrototypeOf(c));
// console.log('Object.getPrototypeOf(Object):', Object.getPrototypeOf(Object));

// console.log(b);
// console.log(c);
// console.log(b.sayName());

let book = {
  title: 'Object Oriented JavaScript',
  sayName: function() { console.log(this.title) }
};
book.__proto__.sayHello = function() { return 'Hello!' }

console.log(book)
console.log('Object.getPrototypeOf(book):', /*Object.getPrototypeOf(book),*/ book.__proto__);
console.log(book.sayName());

// https://www.pluralsight.com/blog/software-development/understanding-javascript-prototypes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/create
// https://www.youtube.com/c/openwebinarsnet/playlists

// console.log(book.hasOwnProperty('title')); // true
// console.log(book.hasOwnProperty('hasOwnProperty')); // false
// console.log('hasOwnProperty' in book); // true (because 'in' includes prototype properties)
// console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); // true

// console.log(book.toString()); // [object Object]
// book.toString = function() {
//   return 'from custom toString function';
// };
// console.log(book.toString()); // from custom toString function

// delete book.toString;
// console.log(book.toString(), '\n'); // [object Object]
