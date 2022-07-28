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
