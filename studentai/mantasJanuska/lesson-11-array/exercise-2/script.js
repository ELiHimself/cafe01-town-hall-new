let numbersArr = [11, -2, 34, 45, 19, -5, 6];
const posArr = numbersArr.filter(num => num > -1);
let sum = 0;
for (let n = 0; n < posArr.length; n++){
    sum += posArr[n]
}

console.log(sum)