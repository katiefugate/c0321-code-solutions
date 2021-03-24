var names = document.querySelector('#user-name');
var email = document.querySelector('#user-email');
var message = document.querySelector('#user-message');

function handleFocus(event) {
  console.log('focus was fired');
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur was fired');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name:', event.target.name);
  console.log('event.target.value:', event.target.value);
}

names.addEventListener('focus', handleFocus);
names.addEventListener('blur', handleBlur);
names.addEventListener('input', handleInput);

email.addEventListener('focus', handleFocus);
email.addEventListener('blur', handleBlur);
email.addEventListener('input', handleInput);

message.addEventListener('focus', handleFocus);
message.addEventListener('blur', handleBlur);
message.addEventListener('input', handleInput);
