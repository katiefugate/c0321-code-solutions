/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var firstNoSpace = firstString.replaceAll(' ', '');
  var secondNoSpace = secondString.replaceAll(' ', '');
  var firstArr = firstNoSpace.split('');
  var secondArr = secondNoSpace.split('');

  for (var k = 0; k < firstArr.length; k++) {
    for (var i = 0; i < secondArr.length; i++) {
      if (firstArr[k] === secondArr[i]) {
        secondArr.splice(i, 1);
      }
    }
  }
  return secondArr.length === 0;
}
