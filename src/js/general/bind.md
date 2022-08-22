# .bind()

```js
const boundFunc = Function.bind(thisArg[, arg1[, arg2[, ...argN]]])
```

### Definition:
> **[MDN:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)** The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

### Parameters:

#### _thisArg_
  > The value to be passed as the `this` parameter to the target function `func` when the bound function is called.
  
* The `thisArg` value is ignored if the bound function is constructed using the new operator.
* When using bind to create a function (supplied as a callback) inside a `setTimeout`, any primitive value passed as `thisArg` is converted to object.
* If no arguments are provided to `bind`, or if the `thisArg`  is `null` or `undefined`, the `this` of the executing scope is treated as the `thisArg` for the new function.

#### _arg1, arg2, ...argN_ | Optional
  > Arguments to prepend to arguments provided to the bound function when invoking func.

#### _Return value_
  > A copy of the given function with the specified this value, and initial arguments (if provided).

### Example:

```js
function getFullName(callerParam) {
  const fullName = this.firstName + ' ' + this.lastName
  return callerParam ? callerParam + ' ' + fullName : fullName;
}

const person1 = {
  firstName: 'Luke',
  lastName: 'Morrison'
};

const person2 = {
  firstName: 'Maria',
  lastName: 'Lauren'
};
```

```js
// using [bind] without additional params
const getFullNameForP1 = getFullName.bind(person1);
getFullNameForP1(); // returns: Luke Morrison

// using [bind] with additional params
const getFullNameForP2 = getFullName.bind(person2, 'Mrs.');
getFullNameForP2(); // returns Mrs. Maria Lauren
```

### Notes:

* attaching a bound function to an object doesn't change the initially bound `"this"`
```js
person2.getFullName = getFullNameForP1; // getFullNameForP1 is always binded to person1
person2.getFullName('Mrs.'); // returns Mrs. Luke Morrison
```
