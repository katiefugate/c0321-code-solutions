/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var firstNoSpace = firstString.replaceAll(' ', '');
  var secondNoSpace = secondString.replaceAll(' ', '');
  var counter = 0;

  for (var i = 0; i < secondNoSpace.length; i++) {
    if (firstNoSpace.includes(secondNoSpace[i])) {
      counter++;
    }
  }
  return counter === firstNoSpace.length;
}
