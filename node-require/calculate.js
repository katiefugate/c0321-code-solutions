const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[4]);

if (process.argv[3] === 'plus') {
  console.log('result:', add.plus(num1, num2));
} else if (process.argv[3] === 'minus') {
  console.log('result:', subtract.minus(num1, num2));
} else if (process.argv[3] === 'times') {
  console.log('result:', multiply.times(num1, num2));
} else if (process.argv[3] === 'over') {
  console.log('result:', divide.over(num1, num2));
}
