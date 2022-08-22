'use strict';
console.log('============================================');
console.log('Global this:', this);
console.log('============================================');

// Sets the name property/value into the Global/Window object
this.name = 'GLOBAL Object'

const objA = {
  name: 'objA',
  sayName: function() {
    return this.name // returns local objA.name value
  },
  sayNameArrow: () => this.name // returns global GLOBAL.name value
}

function BClass(name) {
  this.name = name
  this.sayName = function() {
    return this.name // returns instance "name" value
  }
  this.sayNameArrow = () => this.name // returns local objB.name value
}
BClass.prototype.sayNameFromProto = function () { return this.name } // returns instance "name" value
BClass.prototype.sayNameFromProtoArrow = () => this.name // returns global GLOBAL.name value

const objB = new BClass('BClass -> objB');

console.log('objA.name:', objA.name);
console.log('objA.sayName():', objA.sayName());
console.log('objA.sayNameArrow():', objA.sayNameArrow());

console.log('============================================');

console.log('objB.name:', objB.name);
console.log('objB.sayName:', objB.sayName());
console.log('objB.sayNameArrow:', objB.sayNameArrow());
console.log('objB.sayNameFromProto:', objB.sayNameFromProto());
console.log('objB.sayNameFromProtoArrow:', objB.sayNameFromProtoArrow());

console.log('============================================');

console.log('Global this:', this);
