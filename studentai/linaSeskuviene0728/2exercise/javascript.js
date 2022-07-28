let numbersArr = [11, -2, 34, 45, 19, -5, 6];
let maxSubSum = 0;

for (let i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] > 0) {
      maxSubSum += numbersArr[i];
    } 
}
console.log(maxSubSum);