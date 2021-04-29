/* exported flatten */

function flatten(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    var temp;
    if (Array.isArray(array[i])) {
      temp = array[i];
      for (var k = 0; k < temp.length; k++) {
        newArr.push(temp[k]);
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
