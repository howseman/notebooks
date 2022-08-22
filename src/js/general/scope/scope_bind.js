// Function.bind(scope, args)
// Creates a function and binds it to defined scope (this|object)

function sayName(callerParam) {
  const fullName = this.firstName + ' ' + this.lastName + ' :: ' + callerParam;
  // console.log('[this] in sayName function:', this);
  return fullName;
}

const person1 = {
  firstName: 'Luke',
  lastName: 'Morrison'
};

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  return this.firstName + ' ' + this.lastName;
}

const person2 = new Person('Maria', 'Wright');

// using [bind] without params
const sayNameForP1 = sayName.bind(person1);
// console.log(sayNameForP1('called for person1'));

// using [bind] with params
const sayNameForP2 = sayName.bind(person2, 'called for person2');
console.log(sayNameForP2('arguments here aren\'t passed to sayName()'));
// NOTE: attaching a method to an object doesn't change the original binded "this"
// person2.sayName = sayNameForP1; // this is binded to person1
// person2.sayName('called from person2');

// console.log('sayName in person1:', 'sayName' in person2);

person2.getFullName = sayNameForP1; // getFullNameForP1 is always binded to person1
console.log('getFullName' in person2)
