/* exported titleCase */

function capitalizeFirst(string) {
  var firstUp = string.charAt(0).toUpperCase();
  var end = string.slice(1, string.length);
  var finished = firstUp + end;
  return finished;
}

function titleCase(string) {
  var lower = string.toLowerCase();
  var strArr = lower.split(' ');
  var noCap = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'javascript') {
      strArr[i] = 'JavaScript';
    } else if (strArr[i] === 'api') {
      strArr[i] = 'API';
    } else if (strArr[i].charAt(strArr[i].length - 1) === ':') {
      strArr[i + 1] = capitalizeFirst(strArr[i + 1]);
      if (strArr[i] === 'javascript:') {
        strArr[i] = 'JavaScript:';
      }
    } else if (noCap.includes(strArr[i])) {
      strArr[i].toLowerCase();
    } else if (strArr[i].includes('-')) {
      var splitDash = strArr[i].split('-');
      splitDash[0] = capitalizeFirst(splitDash[0]);
      splitDash[1] = capitalizeFirst(splitDash[1]);
      strArr[i] = splitDash.join('-');
    } else {
      var cap = capitalizeFirst(strArr[i]);
      strArr.splice(i, 1, cap);
    }
  }
  var titleCaseString = strArr.join(' ');
  return titleCaseString;
}
