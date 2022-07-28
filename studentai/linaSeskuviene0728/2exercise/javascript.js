let numbersArr = [11, -2, 34, 45, 19, -5, 6];
let getMaxSubSum = 0;

for (let i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] > 0) {
      getMaxSubSum += numbersArr[i];
    } 
}
console.log(getMaxSubSum);