/* exported takeRight */

function takeRight(array, count) {
  var newArr = [];
  if (array.length === 0) {
    return [];
  }
  for (var i = array.length - count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
