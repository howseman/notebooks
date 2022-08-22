// Different ways to create objects

// Object literal
const obj1 = {
  aProperty: 'itsValue',
  aMethod() {},
  anotherMethod: function() { return this.aProperty },
  evenOtherMethod: () => obj1.aProperty
}

// Same results as Object literal but different syntax
const obj2 = new Object

// Constructor function
function ConstructorFunction() {
  // This function behaves as a constructor
  this.property1 = 'property1Value'
}
// Add a method to object
ConstructorFunction.prototype.aMethod = function() { /** Do something here */}

const obj3 = new ConstructorFunction()

console.log(obj1.anotherMethod())
console.log(obj1.evenOtherMethod())