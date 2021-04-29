
var form = document.querySelector('#contact-form');

function buttonHandler(event) {
  event.preventDefault();
  var email = form.elements.email.value;
  var names = form.elements.name.value;
  var message = form.elements.message.value;
  var inputObj = { names, email, message };
  console.log(inputObj);
  form.reset();
}

form.addEventListener('submit', buttonHandler);
