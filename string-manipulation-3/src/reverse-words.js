/* exported reverseWords */

function reverseWords(string) {
  var strArr = string.split(' ');
  var tempReverseArr = [];
  for (var k = 0; k < strArr.length; k++) {
    var temp = [];
    for (var i = 0; i < strArr[k].length; i++) {
      temp.unshift(strArr[k][i]);
    }
    tempReverseArr.push(temp);
  }
  var reverseArr = [];
  for (var m = 0; m < tempReverseArr.length; m++) {
    var newStr = tempReverseArr[m].join('');
    reverseArr.push(newStr);
    var reverse = reverseArr.join(' ');
  }
  return reverse;
}
