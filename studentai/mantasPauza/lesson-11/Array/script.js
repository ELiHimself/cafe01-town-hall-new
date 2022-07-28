//                              First exercise

const styles = ['Jazz', 'Blues'];

console.log(styles);

styles.push('Rock-n-Roll');

console.log(styles);

styles[1] = 'Classics';

console.log(styles);

const firstStyle = styles.shift();

console.log(firstStyle);
console.log(styles);

styles.unshift('Rap', 'Reggae');

console.log(styles);

//                              Second exercise

let numbersArr = [11, -2, 34, 45, 19, -5, 6];

function getMaxSubSum(arr) {
    let sum = 0;
    for (number of arr) {
        if (number > 0) {
            sum = sum + number;
        }
    }
    return sum;
}

console.log(getMaxSubSum(numbersArr));

//                              Third exercise


let randomArr = [11, 'cat', true, 4, 'mouse', 5, 9, 5, 76, false];

function getArrayByData(array, dataType) {
    let result = [];
    for (item of array) {
        if (typeof item === dataType) {
         result.push(item)
        }
    }
    return result;
}

console.log(getArrayByData(randomArr, 'string'));
console.log(getArrayByData(randomArr, 'number'));


// kata exercise #1

let arrayOfArrays = [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]

function getLengthOfMissingArray(arrayOfArrays) {
  let result = [];

  if (!arrayOfArrays || arrayOfArrays.length === 0 ) {
    return 0;
  }

  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (arrayOfArrays[i] === null || arrayOfArrays[i].length === 0) {
        return 0; 
    } else { 
        result.push(arrayOfArrays[i].length)
      }
    }

  result = result.sort((a, b) => a - b)

  for (let i = 0; i < result.length - 1; i++) {
    if (result[i] + 1 !== result[i + 1]) {
        return result[i] + 1;
    }
  }

  return result;
}


console.log(getLengthOfMissingArray(arrayOfArrays));
console.log(getLengthOfMissingArray([[null], [ null, null, null]]));
console.log(getLengthOfMissingArray([ ]));
console.log(getLengthOfMissingArray(null));
console.log(getLengthOfMissingArray([[2, 4, 2, 2], [3, 4], [0, 4, 2], [3, 2, 3, 2, 2, 1, 4], [1, 3, 2, 0, 3], [2, 2, 0, 4, 0, 2, 0, 2, 1], [2, 3, 4, 3, 4, 4, 2, 2], [0, 1, 4, 1, 1, 3, 2, 3, 3, 3]]));
console.log(getLengthOfMissingArray([[3, 0, 4, 4], [0, 4], [2], [2, 3, 1, 2, 0]]));
console.log(getLengthOfMissingArray([[], [4, 4], [4, 4, 4, 4], [2, 4, 1]]));