'use strict';
const book = {
  title: 'Object Oriented JavaScript'
};

const book2 = Object.create(book, {
  publisher: {
    writable: true,
    value: 'O\'Reilly',
    enumerable: true,
    configurable: true
  }
});

const book3 = {
  formats: ['printed', 'online', 'epub']
};
Object.setPrototypeOf(book3, book2);

console.log('title' in book2); // true
book2.title = 'Learning ES6';
console.log('book.title:', book.title); // book.title: Object Oriented JavaScript
console.log('book2.title:', book2.title); // book2.title: Learning ES6
console.log('book has publisher property:', 'publisher' in book); // book has publisher property: false
console.log('book2 has publisher property:', 'publisher' in book2); // book2 has publisher property: true
console.log('book3.title:', book3.title); // book3.title: Learning ES6
console.log('book3.publisher:', book3.publisher); // book3.publisher: O'Reilly
console.log('book3 has title property:', 'title' in book3); // book3 has title property: true
