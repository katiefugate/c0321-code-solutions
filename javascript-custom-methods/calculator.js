/* exported calculator */

var calculator = {
  add(x, y) {
    var sum = x + y;
    return sum;
  },
  subtract(x, y) {
    var difference = x - y;
    return difference;
  },
  multiply(x, y) {
    var product = x * y;
    return product;
  },
  divide(x, y) {
    var quotient = x / y;
    return quotient;
  },
  square(x) {
    var squared = x * x;
    return squared;
  },
  sumAll(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  },
  getAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    var average = sum / numbers.length;
    return average;
  }
};
