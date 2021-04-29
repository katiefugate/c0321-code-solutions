/* exported todos */

var myStorage = window.localStorage;
var todos = [];
var previousTodosJSON = myStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}

function store(event) {
  var todosJSON = JSON.stringify(todos);
  myStorage.setItem('javascript-local-storage', todosJSON);
}

window.addEventListener('beforeunload', store);
