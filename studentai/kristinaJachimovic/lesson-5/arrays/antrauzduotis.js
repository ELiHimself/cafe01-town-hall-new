let numbersArr = [11, -2, 34, 45, 19, -5, 6];

function getMaxSubSum(arr) {
  let sum = 0;
  // console.log(arr, sum);
  for (let i = 0; i < arr.length; i++) {
    // console.log(sum);
    if (arr[i] > 0) {
      sum += arr[i];
      // console.log(arr, sum);
    }
  }
  console.log(sum);
}

getMaxSubSum(numbersArr);