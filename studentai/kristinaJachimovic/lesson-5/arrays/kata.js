function sumMix(x){
  let sum = 0;
  for(let i = 0; i < x.length; i++){
    sum += parseFloat(x[i]);
  }
  return sum;
}

console.log(sumMix([9, 3, '7', '3', ]));
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
