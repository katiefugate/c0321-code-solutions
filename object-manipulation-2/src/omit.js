/* exported omit */

function omit(source, keys) {
  var copy = Object.assign({}, source);

  for (var k = 0; k < keys.length; k++) {
    if (keys[k] in source) {
      delete copy[keys[k]];
    }
  }
  return copy;
}
