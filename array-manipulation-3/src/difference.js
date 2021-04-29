/* exported difference */

function difference(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArr.push(first[i]);
    }
  }
  for (var k = 0; k < second.length; k++) {
    if (!first.includes(second[k])) {
      newArr.push(second[k]);
    }
  }
  return newArr;
}
