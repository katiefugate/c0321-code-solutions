/* exported isPalindromic */

function isPalindromic(string) {
  var arr = string.split('');
  var backwords = [];
  var orig = arr.join('');
  var tempp = orig.split(' ');
  var noSpaceString = tempp.join('');

  for (var i = 0; i < noSpaceString.length; i++) {
    backwords.unshift(noSpaceString[i]);
  }

  var backwordsString = backwords.join('');
  var temp = backwordsString.split(' ');
  var noSpaceBack = temp.join('');

  return noSpaceString === noSpaceBack;
}
