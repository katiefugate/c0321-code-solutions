const takeAChance = require('./take-a-chance');

const promiseObj = takeAChance('Katie');

promiseObj.then(resolve => {
  console.log(resolve);
}, reject => {
  console.log(reject.message);
});
