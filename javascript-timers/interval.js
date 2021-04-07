
var countdown = document.querySelector('h1');
var i = 3;

function changeCountdown() {
  if (countdown.textContent === '1') {
    countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  } else {
    countdown.textContent = i;
    i--;
  }
}

var intervalId = setInterval(changeCountdown, 2000);
