/* exported ransomCase */

function ransomCase(string) {
  var newStr = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newStr = newStr + string[i].toLowerCase();
    } else {
      newStr = newStr + string[i].toUpperCase();
    }
  }
  return newStr;
}
