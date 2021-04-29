/* exported capitalizeWords */

function capitalizeWords(string) {
  string = string.toUpperCase();
  var arr = string.split(' ');
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i][0] + arr[i].substring(1, arr[i].length).toLowerCase());
  }
  return newArr.join(' ');
}
