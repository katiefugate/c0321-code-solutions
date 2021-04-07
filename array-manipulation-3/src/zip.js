/* exported zip */

function zip(first, second) {
  var zipped = [];
  var temp;
  if (second.length <= first.length) {
    for (var i = 0; i < second.length; i++) {
      temp = [];
      temp.push(first[i]);
      temp.push(second[i]);
      zipped.push(temp);
    }
  } else {
    for (var k = 0; k < first.length; k++) {
      temp = [];
      temp.push(first[k]);
      temp.push(second[k]);
      zipped.push(temp);
    }
  }
  return zipped;
}
