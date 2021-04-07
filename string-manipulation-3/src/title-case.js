/* exported titleCase */

function titleCase(string) {
  var lower = string.toLowerCase();
  var strArr = lower.split(' ');
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'javascript') {
      strArr[i] = 'JavaScript';
    } else if (strArr[i] === 'api') {
      strArr[i] = 'API';
    } else if (strArr[i] === 'web') {
      var firstUp = strArr[i].charAt(0).toUpperCase();
      var end = strArr[i].slice(1, strArr[i].length);
      var finished = firstUp + end;
      strArr.splice(i, 1, finished);
    } else if (strArr[i].charAt(strArr[i].length - 1) === ':') {
      var firstUpp = strArr[i + 1].charAt(0).toUpperCase();
      var endd = strArr[i + 1].slice(1, strArr[i + 1].length);
      var finishedd = firstUpp + endd;
      strArr.splice(i + 1, 1, finishedd);
      if (strArr[i] === 'javascript:') {
        strArr[i] = 'JavaScript:';
      }
    } else if (strArr[i].includes('-')) {
      var splitDash = strArr[i].split('-');
      var firstUpper = splitDash[0].charAt(0).toUpperCase();
      var secondUpper = splitDash[1].charAt(0).toUpperCase();
      var firstEnd = splitDash[0].slice(1, splitDash[0].length);
      var secondEnd = splitDash[1].slice(1, splitDash[1].length);
      var firstFinished = firstUpper + firstEnd;
      var secondFinished = secondUpper + secondEnd;
      splitDash[0] = firstFinished;
      splitDash[1] = secondFinished;
      strArr[i] = splitDash.join('-');
    } else if (strArr[i].length > 3) {
      firstUp = strArr[i].charAt(0).toUpperCase();
      end = strArr[i].slice(1, strArr[i].length);
      finished = firstUp + end;
      strArr.splice(i, 1, finished);
    }
  }

  var titleCaseString = strArr.join(' ');
  return titleCaseString;
}
