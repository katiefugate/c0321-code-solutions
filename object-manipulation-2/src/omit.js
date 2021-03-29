/* exported omit */

function omit(source, keys) {
  var copy = Object.assign({}, source);
  for (var k = 0; k < keys.length; k++) {
    for (var key in copy) {
      if (key === keys[k]) {
        delete copy[key];
      }
    }
  }
  return copy;
}
