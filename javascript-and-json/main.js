var books = [
  {
    isbn: '978-1551923987',
    title: 'Harry Potter and the Sorcerers Stone',
    author: 'J.K. Rowling'
  },
  {
    isbn: '9780142410707',
    title: 'An Abundance of Katherines',
    author: 'John Green'
  },
  {
    isbn: '978-0439023481',
    title: 'The Hunger Games',
    author: 'Suzanne Collins'
  }
];

console.log('books:', books);
console.log('typeof books:', typeof books);

var booksSerialized = JSON.stringify(books);
console.log('booksSerialized:', booksSerialized);
console.log('typeof booksSerialized:', typeof booksSerialized);

var student = '{"id":"2345","name":"katie"}';
console.log('student:', student);
console.log('typeof student:', typeof student);

var studentDeserialized = JSON.parse(student);
console.log('studentDeserialized', studentDeserialized);
console.log('typeof studentDeserialized', typeof studentDeserialized);
