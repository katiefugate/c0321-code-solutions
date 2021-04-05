/* exported isPalindromic */

function isPalindromic(string) {
  var arr = string.split('');
  var backwords = [];

  for (var i = 0; i < arr.length; i++) {
    backwords.unshift(arr[i]);
  }

  var orig = arr.join('');
  var tempp = orig.split(' ');
  var noSpaceString = tempp.join('');

  var backwordsString = backwords.join('');
  var temp = backwordsString.split(' ');
  var noSpaceBack = temp.join('');

  return noSpaceString === noSpaceBack;
}
