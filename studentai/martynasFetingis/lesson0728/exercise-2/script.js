let numbersArr = [11, -2, 34, 45, 19, -5, 6];
let sum = 0;

for (let i = 0; i < numbersArr.length; i++) {
  if (numbersArr[i] > 0) {
    sum += numbersArr[i];
  }
}

console.log(sum);
