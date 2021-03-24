var openButton = document.querySelector('.open');
var modal = document.querySelector('.modal');
var noButton = document.querySelector('.noButton');
var body = document.querySelector('body');

function openModal(event) {
  modal.className = 'modal';
  body.className = 'isOpen';
}

function closeButton(event) {
  modal.className = 'modal hidden';
  body.className = '';
}

openButton.addEventListener('click', openModal);
noButton.addEventListener('click', closeButton);
