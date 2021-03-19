/* exported reverseWord */

// function reverseWord(word) {
//   var reversed = '';
//   for (i = word.length; i <= word.length; i--) {
//   reversed += word[word.length - 1];
//   }
//   return reversed;
// }

function reverseWord(word) {
  var reversed = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}
