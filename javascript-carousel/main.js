// var eachImg = document.querySelectorAll('.img');
// var eachCircle = document.querySelectorAll('.fa-circle');

// var i = 0;
// function changeImg() {
//   for(k = 0; k < eachImg.length; k++) {
//     eachImg[k].className = 'img hidden';
//     eachImg[i].className = 'img';
//     eachCircle[k].className = 'far fa-circle'
//     eachCircle[i].className = 'fas fa-circle';
//   }
//   if(i === 4) {
//     i = 0;
//   }
//   else {
//     i++
//   }
// }

// var intervalId = setInterval(changeImg, 3000);

// var container = document.querySelector('.container');

// function arrowHandler(event) {
//   console.log(event.target)
//   if (event.target.className === 'fas fa-chevron-left') {
//     if(i === 0) {
//       i = 4;
//     }
//     else {
//       i--
//     }
//     for (k = 0; k < eachImg.length; k++) {
//       eachImg[k].className = 'img hidden';
//       eachImg[i].className = 'img';
//       eachCircle[k].className = 'far fa-circle'
//       eachCircle[i].className = 'fas fa-circle';
//     }
//   }
//   else if (event.target.className === 'fas fa-chevron-right') {
//     if (i === 4) {
//       i = 0;
//     }
//     else {
//       i++
//     }
//     for (k = 0; k < eachImg.length; k++) {
//       eachImg[k].className = 'img hidden';
//       eachImg[i].className = 'img';
//       eachCircle[k].className = 'far fa-circle'
//       eachCircle[i].className = 'fas fa-circle';
//     }
//   }
// }

// container.addEventListener('click', arrowHandler);
