/* exported zip */

function zip(first, second) {
  var zipped = [];
  var temp;
  var length = Math.min(first.length, second.length);

  for (var i = 0; i < length; i++) {
    temp = [];
    temp.push(first[i]);
    temp.push(second[i]);
    zipped.push(temp);
  }
  return zipped;
}
