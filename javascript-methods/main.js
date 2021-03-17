var num1 = 5;
var num2 = 10;
var num3 = 15;

var maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue:', maximumValue);

var heroes = ['superman', 'spiderman', 'ironman', 'captain america'];

var randomNumber = Math.random();
randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'An Abundance of Katherines',
    author: 'John Green'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins'
  },
  {
    title: "The Hand Maid's tale",
    author: 'Margaret Atwood'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

var fullName = 'Katie Fugate';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
