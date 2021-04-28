const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

let result = null;
if (process.argv[3] === 'plus') {
  result = add.plus(process.argv[2], process.argv[4]);
  console.log(`result: ${result}`);
} else if (process.argv[3] === 'minus') {
  result = subtract.minus(process.argv[2], process.argv[4]);
  console.log(`result: ${result}`);
} else if (process.argv[3] === 'times') {
  result = multiply.times(process.argv[2], process.argv[4]);
  console.log(`result: ${result}`);
} else if (process.argv[3] === 'over') {
  result = divide.over(process.argv[2], process.argv[4]);
  console.log(`result: ${result}`);
}
