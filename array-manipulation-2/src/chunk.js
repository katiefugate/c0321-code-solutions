/* exported chunk */

// function chunk(array, size) {

//   var arrFinal = [];
//   var arrOne = [];
//   for (var i = 0; i < size; i++) {
//     if (array.length === 0) {
//       return [];
//     } else {
//       arrOne.push(array[i]);
//     }
//   }
//   var arrTwo = [];
//   for (var k = size; k < array.length; k = k + size) {

//     arrTwo.push(array[i]);
//   }
//   arrFinal.push(arrOne);
//   arrFinal.push(arrTwo);
//   return arrFinal;
// }

// function chunk(array, size) {
//   var newArr = [];
//   if (array.length === 0) {
//     return [];
//   }
//   for(i = 0; i < size; i = i + size) {
//     newArr.push(array.slice(0, size));
//   }
//   for(k = size; k < array.length; k = k + size) {
//   newArr.push(array.slice(k, k + size));
//   }
//   return newArr;
// }
