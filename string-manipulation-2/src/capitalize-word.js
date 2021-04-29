/* exported capitalizeWord */

function capitalizeWord(word) {
  word = word.toUpperCase();
  if (word === 'JAVASCRIPT') {
    word = 'JavaScript';
  } else {
    var end = word.substring(1, word.length);
    word = word[0].toUpperCase() + end.toLowerCase();
  }
  return word;
}
