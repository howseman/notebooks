'use strict';
function Person(name, age) {
  this.name = name;
  this.age = age || 0;

  this.sayAge = () => {
    console.log(this.age);
  };
}

// TODO: make nested objects to check the "this" for arrow functions

Person.prototype.sayName = function() {
  console.log('my name is:', this.name); // my name is: Josh
};

// this.name = 'Luke';
Person.prototype.sayArrowName = () => {
  // Here 'this' is in the global (parent) scope
  console.log('my arrow name is:', this.name); // my name is: undefined
};

const person = new Person('Josh', 45);
person.sayName();
person.sayArrowName();
person.sayAge();
person.sayAgeAsync();
