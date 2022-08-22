'use strict';

function Order() {
  this.cart = new Cart();
  this.deliveryMethod = ''; // online, UPS, FedEx, store, etc...
  this.shippingCost = 0;
}

function Cart() {
  this.items = [];
}
Cart.prototype.addItem = function(item) {
  this.items.push(item);
};

function CartItem() {
  this.price = 0;
  this.weight = 0;
  this.discountRate = 0;
}

function Computer(brand, model) {
  this.brand = brand; // Apple, Dell, Asus, etc...
  this.model = model; // MBP-16, Inspiron, N61WC
  this.parts = [];
  // this.sum = function(n1, n2) { return this.name + this.dni };
  // console.log('this inside f1:', this);
  // console.log('this inside f1:', JSON.stringify(this));
}

// const pc = new Computer('Apple', 'MBP-16');
// console.log(typeof pc, ':', pc.constructor.name);
// console.dir(pc);
// console.dir({name: 'Max'});

// const fn2 = function(a, b) {
//   this.counter = 0;
//   console.log(this);
//   return a + b;
// };

// const fn3 = (a, b) => { 
//   console.log(this);
//   return a + b;
// };

const myObj1 = {
  counter: 0,
  increment: function() {
    return ++this.counter;
  },
  decrement: function() {
    console.log('inside myObj1.decrement', this);
    return --this.counter;
  }
};
myObj1.square = function() {
  console.log('inside myObj1.square', this);
  return Math.pow(this.counter, 2);
};

// console.dir(Calculator);
// const _Calculator = new Calculator(5, 5);
// console.log('Calculator sum() result:', _Calculator.sum());
// console.log('Calculator square() result:', _Calculator.square());
// console.dir(fn3);
console.log(myObj1.increment());
console.log(myObj1.increment());
console.log(myObj1.decrement());
console.log(myObj1.square());
console.log(myObj1.counter);
