var eachImg = document.querySelectorAll('.img');
var eachCircle = document.querySelectorAll('.fa-circle');
var intervalId = null;

var i = 0;
function changeImg() {
  for (var k = 0; k < eachImg.length; k++) {
    eachImg[k].className = 'img hidden';
    eachImg[i].className = 'img';
    eachCircle[k].className = 'far fa-circle';
    eachCircle[i].className = 'fas fa-circle';
  }
  if (i === 4) {
    i = 0;
  } else {
    i++;
  }
}

intervalId = setInterval(changeImg, 3000);

var container = document.querySelector('.container');

function arrowHandler(event) {
  clearInterval(intervalId);
  if (event.target.className === 'fas fa-chevron-left') {
    if (i === 0) {
      i = 4;
    } else {
      i--;
    }
    for (var k = 0; k < eachImg.length; k++) {
      eachImg[k].className = 'img hidden';
      eachImg[i].className = 'img';
      eachCircle[k].className = 'far fa-circle';
      eachCircle[i].className = 'fas fa-circle';
    }
  } else if (event.target.className === 'fas fa-chevron-right') {
    if (i === 4) {
      i = 0;
    } else {
      i++;
    }
    for (k = 0; k < eachImg.length; k++) {
      eachImg[k].className = 'img hidden';
      eachImg[i].className = 'img';
      eachCircle[k].className = 'far fa-circle';
      eachCircle[i].className = 'fas fa-circle';
    }
  }
  var currentView = event.target.dataset.view;

  if (event.target.matches('.fa-circle')) {
    for (k = 0; k < eachCircle.length; k++) {
      if (eachImg[k].getAttribute('data-view') !== currentView) {
        eachImg[k].className = 'img hidden';
        eachCircle[k].className = 'far fa-circle';
        i = event.target.dataset.view;
      } else {
        eachImg[k].className = 'img';
        eachCircle[k].className = 'fas fa-circle';
      }
    }
  }
  intervalId = setInterval(changeImg, 3000);
}

container.addEventListener('click', arrowHandler);
