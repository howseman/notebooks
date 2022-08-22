'use strict';
this.x = 9; // 'this' refers to global/Window object

const obj1 = {
  x: 81,
  getX: function() { return this.x }
};
console.log(obj1.getX());
// 81

const retrieveX = obj1.getX;
// In strict mode, next line throws an error because the function is executed
// out of the scope of an object, therefor "this" in "getX" method is undefined
// console.log(retrieveX()); // TypeError: Cannot read property 'x' of undefined

const obj2 = {
  x: 20,
  // getX: retrieveX,
  getX: obj1.getX
};
console.log(obj2.getX());
// 20

obj1.getX = function() { return Math.pow(this.x, 2) }
console.log(obj1.getX());
// 6561
console.log(obj2.getX());
// 20
