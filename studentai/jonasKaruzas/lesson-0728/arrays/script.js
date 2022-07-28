const styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[1] = 'Classics';
console.log(styles.shift());
styles.unshift('Rap', 'Reggae');

console.log(styles);

// Uzduotis 2 ------------------

let numbersArr = [11, -2, 34, 45, 19, -5, 6];

function getMaxSubSum(arr) {
  let result = 0;
  for (num of arr) {
    if (num > 0) {
      result += num;
    }
  }
  return result;
}

console.log(getMaxSubSum(numbersArr));

// Uzduotis 3 ------------------
console.log('Uzduotis 3 --------------');

let randomArr = [11, 'cat', true, 4, 'mouse', 5, 9, 5, 76, false];

function getArrayByData(array, dataType) {
  const result = [];
  for (item of array) {
    if (typeof item === dataType) {
      result.push(item);
    }
  }
  return result;
}

console.log(getArrayByData(randomArr, 'string'));
console.log(getArrayByData(randomArr, 'number'));
console.log(getArrayByData(randomArr, 'boolean'));

// Uzduotis 3B ------------------
console.log('Uzduotis 3B --------------');

function getArrayByData2(array, dataType) {
  return array.filter((item) => typeof item === dataType);
}

console.log(getArrayByData2(randomArr, 'string'));
console.log(getArrayByData2(randomArr, 'number'));
console.log(getArrayByData2(randomArr, 'boolean'));
