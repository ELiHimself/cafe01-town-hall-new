// const getHighestNumber = (...num) => Math.max(...num);/

function getLowestNumber(...num) {
  let min = num[0];
  for (let n = 0; n < num.length; n++) {
    if (num[n] < min) {
      min = num[n];
    }
  }
  return min;
}

console.log(getLowestNumber(-1, 1, 2, 3, 4));
console.log(getLowestNumber(-20, 9, 346, 8987654, -3837));