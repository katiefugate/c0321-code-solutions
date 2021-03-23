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
//     if (arrOne.length === size){
//     arrFinal.push(arrOne);
//     console.log('arrOne', arrOne);
//     }
//   }
//   var arrTwo = [];
//   for (var k = size; k < array.length; k++) {
//     if(arrTwo.length < size) {
//     arrTwo.push(array[k]);
//     }
//     if(arrTwo.length === size) {
//       arrFinal.push(arrTwo);
//     }
//     else {
//       arrTwo.push(array[k]);
//     }

//     }
//   console.log('arrTwo', arrTwo);
//   // arrFinal.push(arrOne);
//   // arrFinal.push(arrTwo);
//   return arrFinal;
// }

function chunk(array, size) {
  var arrFinal = [];
  var arrOne = [];
  for (var i = 0; i < array.length; i++) {
    if (array.length === 0) {
      return [];
    }
    for (var k = 0; k < array.length; k++) {
      if (arrOne.length < size) {
        arrOne.push(array[k]);
      } else if (arrOne.length === size) {
        arrFinal.push(arrOne);
        arrOne = [];
      }
    }
  }
  return arrFinal;
}

//   var arrTwo = [];
//   for (var k = size; k < array.length; k = k + size) {

//     arrTwo.push(array[k]);
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
