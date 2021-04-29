/* exported unique */

function unique(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(array[i]);
  }
  var k = 0;
  var b = 1;
  while (k < newArr.length) {
    for (var m = b; m < newArr.length; m++) {
      if (newArr[k] === newArr[m]) {
        newArr.splice(m, 1);
        m--;
      }
    }
    b++;
    k++;
  }
  return newArr;
}
