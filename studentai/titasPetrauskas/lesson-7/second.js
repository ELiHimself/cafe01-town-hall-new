let numbersArr = [11, -2, 34, 45, 19, -5, 6];

function getMaxSubSum(arr) {
  let sum = 0;
  for (let number of numbersArr) {
    if (number > 0) {
      sum += number;
    }
  }
  return 'The sum of the array\'s positive numbers is: ' + sum;
}

console.log(getMaxSubSum(numbersArr));