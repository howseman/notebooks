// 'use strict'
var person = {
  name: 'Jhon',
  age: 23
};

console.log('Initial \'person\' object:', person);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_property
// if the property (2nd param) doesn't exist in the target object (1st param),
// a new one is created. NOTE: when defineProperty is used, it is important
// to specify all attributes because boolean attributes automatically
// default to false
Object.defineProperty(person, 'name', {
  configurable: false, // default: false
  enumerable: false, // default: false
  // For value properties:
  writable: false, // default: false
  value: 'Peter', // sets the property value
  // For accessor properties
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Accessor_property
  // get: function() { return this._propertyName },
  // set: function(value) { this._propertyName = value },
});

console.log('\'name\' in person:', 'name' in person); // true
console.log('person.propertyIsEnumerable(\'name\'):', person.propertyIsEnumerable('name')); // false
console.log('Object.keys(person):', Object.keys(person)); // ['age']
console.log('Object.getOwnPropertyNames(person):', Object.getOwnPropertyNames(person)); // ['age']

// In non strict mode: false if configurable === false else true
// In strict mode: TypeError: Cannot delete property 'name' of ...
console.log('delete person.name:', delete person.name);
console.log('\'name\' in person:', 'name' in person); // true
console.log('preson.name:', person.name); // name: Peter

// Any intent of reconfigure an "unconfigurable" property throw an error 
// TypeError: Cannot redefine property: name
// Object.defineProperty(person, 'name', {
//   configurable: true,
//   enumerable: true
//   // ...
// });

console.log('person:', person); // person: { age: 23 }
console.log('Object.getOwnPropertyDescriptor(person, \'name\')', Object.getOwnPropertyDescriptor(person, 'name'));
// {
//   value: 'Peter',
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// Object.defineProperties(person, {
//   propName: {
//     enumerable: ,
//     writable: ,
//     ...
//   },
//   prop2Name: { ... }
// });

console.log('------------------------');
person.sayHello = function() {
  return 'Hello ' + this.name;
};
console.log('person.sayHello():', person.sayHello());
console.log('------------------------');


