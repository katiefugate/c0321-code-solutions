/* exported pick */

function pick(source, keys) {
  var newObj = {};

  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (source[key] === undefined) {
        source[key] = undefined;
      } else if (key === keys[i]) {
        newObj[key] = source[key];
      }
    }
  }
  return newObj;
}
