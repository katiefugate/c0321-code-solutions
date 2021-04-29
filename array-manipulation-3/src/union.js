/* exported union */

function union(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    newArr.push(first[i]);
  }
  for (var k = 0; k < second.length; k++) {
    if (!newArr.includes(second[k])) {
      newArr.push(second[k]);
    }
  }
  return newArr;
}
