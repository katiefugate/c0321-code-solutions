/* exported isVowel */

function isVowel(char) {
  char = char.toUpperCase();
  if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
    return true;
  } else {
    return false;
  }
}
