/* exported oddOrEven */

function oddOrEven(array) {
  var which = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      which.push('even');
    } else if (array[i] % 2 === 1) {
      which.push('odd');
    }
  }
  return which;
}
