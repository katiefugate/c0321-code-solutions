var openButton = document.querySelector('.open');
var modal = document.querySelector('.modal');
var noButton = document.querySelector('.noButton');
var modalContainer = document.querySelector('.modalContainer');

function openModal(event) {
  modal.setAttribute('open', '');
  modalContainer.className = 'modalContainer isOpen';
}

function closeButton(event) {
  modal.removeAttribute('open', '');
  modalContainer.className = 'modalContainer';
}

openButton.addEventListener('click', openModal);
noButton.addEventListener('click', closeButton);
