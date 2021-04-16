/* exported reverseWords */

function reverseWords(string) {
  var strArr = string.split(' ');
  var backwords = [];
  for (var i = 0; i < strArr.length; i++) {
    var temp = [];
    for (var k = strArr[i].length - 1; k >= 0; k--) {
      temp.push(strArr[i][k]);
      var backwordsWord = temp.join('');
    }
    backwords.push(backwordsWord);
  }
  return backwords.join(' ');
}
