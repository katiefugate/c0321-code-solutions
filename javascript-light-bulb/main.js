var button = document.querySelector('.button');
var container = document.querySelector('.container');

function flip(event) {
  if (button.className === 'button on') {
    button.className = 'button off';
    container.className = 'container off';
  } else if (button.className === 'button off') {
    button.className = 'button on';
    container.className = 'container on';
  }
}

button.addEventListener('click', flip);
