let obj1 = {
  name: 'Jhon',
  age: 34,
  hobbies: null
};

const hobbies = {
  name: 'ride',
  timeOfPractice: 14
};

obj1 = { ...obj1, hobbies };
console.log(obj1);

const { name, timeOfPractice } = hobbies;
console.log(name, timeOfPractice);
