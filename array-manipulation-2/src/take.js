/* exported take */

function take(array, count) {
  var newArr = [];
  for (var i = 0; i < count; i++) {
    if (array.length === 0) {
      return [];
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
