// methods injection with Function.call() and Function.apply()
function sayName() {
  var fullName = this.firstName + ' ' + this.lastName;
  console.log('"this" in sayName function:', this, '\n');
  return fullName;
}

function saySomething(arg1, arg2) {
  console.log(`"saySomething" function called from "${this.constructor.name}" object with args:"${arg1}", "${arg2}"\n`);
}

var p1 = {
  firstName: 'Rayder',
  lastName: 'Wiggings',
};

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.color = 'green';
}

var p2 = new Person('Luke', 'Rudolph');

// Using [call] you don't need to add the function directly to
// p1 object, simply call it and ready!
// Function.call(this: Function, thisArg: any, ...argArray: any[]): any
sayName.call(p1, 'using .call()', 'argument1', 'argument2');
// "this" in sayName function: { firstName: 'Rayder', lastName: 'Wiggings' }

saySomething.call(p2, 'anyValue', 'anotherValue');
// "saySomething" function called from "Person" object with args:"anyValue", "anotherValue"

// Same as call but it receives an array as second parameter
sayName.apply(p2, ['using .apply()', 'argument1', 'argument2', 'arg3']);
// "this" in sayName function: Person { firstName: 'Luke', lastName: 'Rudolph', color: 'green' }
