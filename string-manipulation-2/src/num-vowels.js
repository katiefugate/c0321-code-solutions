/* exported numVowels */

function numVowels(string) {
  var upString = string.toUpperCase();
  var num = 0;
  for (var i = 0; i < string.length; i++) {
    if (upString[i] === 'A' || upString[i] === 'E' || upString[i] === 'I' || upString[i] === 'O' || upString[i] === 'U') {
      num++;
    }
  }
  return num;
}
