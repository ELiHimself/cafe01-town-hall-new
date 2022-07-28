// let numbersArr = [11, -2, 34, 45, 19, -5, 6];
// let sum = 0;

// for (let i = 0; i < numbersArr.length; i++) {
//   if (numbersArr[i] > 0) {
//     sum += numbersArr[i];
//   }
// }

// console.log(sum);

let randomArr = [11, 'cat', true, 4, 'mouse', 5, 9, 5, 76, false];

function getArrayByData(randomArr, dataType) {
  let filteredBasket = [];

  for (let item of randomArr) {
    if (typeof item === dataType) {
      filteredBasket.push(item);
    }
  }
  return filteredBasket;
}

console.log(getArrayByData(randomArr, 'string'));
