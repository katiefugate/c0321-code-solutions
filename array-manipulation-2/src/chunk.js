/* exported chunk */

function chunk(array, size) {
  var newArr = [];
  if (array.length === 0) {
    return [];
  }
  for (var i = 0; i < size; i = i + size) {
    newArr.push(array.slice(0, size));
  }
  for (var k = size; k < array.length; k = k + size) {
    newArr.push(array.slice(k, k + size));
  }
  return newArr;
}
