function convertMinutesToSeconds(minutes) {
  var sum = minutes * 60;
  return sum;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hello, ' + name + '!';
  return greeting;
}

var greetResult = greet('cody');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  var first = person.firstName;
  return first;
}

var getFirstNameResult = getFirstName({ firstName: 'Katie', lastName: 'Fugate' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  var i = array.length - 1;
  var last = array[i];
  return last;
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult:', getLastElementResult);
