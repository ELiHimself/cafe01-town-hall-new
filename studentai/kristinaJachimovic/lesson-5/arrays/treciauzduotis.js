let randomArr = [11, 'cat', true, 4, 'mouse', 5, 9, 5, 76, false];
function getArrayByData(array, dataType) {
  let newRandom = [];
  for( let item of randomArr){
    if(typeof item === dataType) {
      newRandom.push(item);
    }
  }
  return newRandom;
}

console.log(getArrayByData(randomArr, 'string'));
console.log(getArrayByData(randomArr, 'number'));
console.log(getArrayByData(randomArr, 'boolean'));