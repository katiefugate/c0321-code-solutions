var tabContainer = document.querySelector('.tab-container');
var tabs = document.querySelectorAll('.tab');
var views = document.querySelectorAll('.view');

function clickHandler(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i] === event.target) {
        tabs[i].className = 'tab active';
      } else {
        tabs[i].className = 'tab';
      }
    }
  }

  var view = event.target.dataset.view;

  for (var k = 0; k < views.length; k++) {
    if (views[k].getAttribute('data-view') !== view) {
      views[k].className = 'view hidden';
    } else {
      views[k].className = 'view';
    }
  }
}

tabContainer.addEventListener('click', clickHandler);
