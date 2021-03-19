/* exported getWords */

function getWords(string) {
  if (string === '') {
    return [];
  } else {
    var split = string.split(' ');
    return split;
  }
}
