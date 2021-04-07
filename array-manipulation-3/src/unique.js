/* exported unique */

function unique(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(array[i]);
  }
  var k = 0;
  var r = 1;
  while (k < newArr.length) {
    for (var m = r; m < newArr.length; m++) {
      if (newArr[k] === newArr[m]) {
        newArr.splice(m, 1);
        m--;
      }
    }
    r++;
    k++;
  }
  return newArr;
}
