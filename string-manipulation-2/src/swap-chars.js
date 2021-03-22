/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var arr = string.split('');
  var first = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = first;
  var newStr = arr.join('');
  return newStr;
}
