/* exported pick */

function pick(source, keys) {
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] === undefined) {
      source[keys[i]] = undefined;
    } else if (keys[i] in source) {
      newObj[keys[i]] = source[keys[i]];
    }
  }
  return newObj;
}
