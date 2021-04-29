/* exported take */

function take(array, count) {
  var newArr = [];
  if (array.length === 0) {
    return [];
  }
  for (var i = 0; i < count; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
