/* exported defaults */

function defaults(target, source) {
  var targetArr = Object.keys(target);
  for (var key in source) {
    if (!targetArr.includes(key)) {
      target[key] = source[key];
    }
  }
}
