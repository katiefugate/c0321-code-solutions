/* exported capitalize */

function capitalize(word) {
  var end = word.substring(1, word.length);
  word = word[0].toUpperCase() + end.toLowerCase();
  return word;
}
