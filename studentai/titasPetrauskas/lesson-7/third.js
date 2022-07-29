let randomArr = [11, 'cat', true, 4, 'mouse', 5, 9, 5, 76, false];


function getArrayByData(array, dataType) {
  let filtered = [];
  for (let element of array) {
    switch (dataType) {
      case 'string':
        filtered = randomArr.filter(element => typeof element === 'string');
        break;
      case 'number':
        filtered = randomArr.filter(element => typeof element === 'number');
        break;
      case 'boolean':
        filtered = randomArr.filter(element => typeof element === 'boolean');
        break;
      default:
        return console.log('Oops, something went wrong...');
    }
  }
  console.log(filtered);
}

getArrayByData(randomArr, 'boolion');