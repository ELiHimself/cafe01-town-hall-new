let numbersArr = [11, -2, 34, 45, 19, -5,  6]

function getMaxSubSum(arr) {
    let res = 0;
    for (let n = 0; n < arr.length; n++) {
        if (arr[n] > 0) {
              res += arr[n];
        }
    }
    return res
}

console.log(getMaxSubSum(numbersArr));