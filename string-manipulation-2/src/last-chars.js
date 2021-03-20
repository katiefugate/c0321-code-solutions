/* exported lastChars */

function lastChars(length, string) {
  if (string.length - length < 0) {
    return string;
  }
  var chars = string.slice(string.length - length, string.length);
  return chars;
}
