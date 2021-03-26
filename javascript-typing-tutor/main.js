// var parent = document.querySelector('.container')
// var letters = document.querySelectorAll('span');
// var typedLetter;
// var typeCount = 0;
// function eachLetter(currentValue) {
//   typedLetter = currentValue.key;
//   typeThis(typedLetter);
//   typeCount++
//   percentage();
// }

// var t = 0;
// var incorrect = 0;
// letters[0].className = 'current'
// function typeThis(letter) {
//   if(letter === letters[t].textContent) {
//     letters[t].className = 'correct';
//     letters[t + 1].className = 'current';
//     t++;
//   }
//   else {
//     letters[t].className = 'incorrect';
//       incorrect++
//     }
//     if(t === letters.length - 1) {
//       console.log('end')
//       return;
//     }
// }
// function percentage() {
//   if (t === letters.length - 1) {
//     var correct = typeCount - incorrect;
//     var percent = (correct / typeCount) * 100;
//     percent = Math.round(percent);
//     var body = document.querySelector('body');
//     var popUp = document.createElement('div');
//     var percentCorrect = document.createElement('p');
//     var again = document.createElement('p');
//     var yesButton = document.createElement('button');
//     body.appendChild(popUp);
//     popUp.appendChild(percentCorrect);
//     popUp.appendChild(again);
//     popUp.appendChild(yesButton);
//     percentCorrect.textContent = 'Your typing accuracy is ' + percent + '%!';
//     again.textContent = 'Would you like to play again?';
//     yesButton.textContent = 'YES!';
//     percentCorrect.className = 'percent';
//     popUp.className = 'popUp';
//     percentCorrect.className = 'percent';
//     again.className = 'again';
//   }
// }

// document.addEventListener('keydown', eachLetter);
