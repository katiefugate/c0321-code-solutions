var taskList = document.querySelector('.task-list');

function clickHandler(event) {
  console.log('event.target', event.target);
  console.log('event.target.tagName', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var closestItem = event.target.closest('.task-list-item');
    console.log('event.target.closest:', closestItem);
    closestItem.remove();
  }
}
taskList.addEventListener('click', clickHandler);
