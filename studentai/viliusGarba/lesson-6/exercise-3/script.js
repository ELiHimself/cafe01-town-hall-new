// function getHighestNumber(...numbers) {
//   console.log(Math.max(...numbers));
// }

function getHighestNumber(...numbers) {
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

console.log(getHighestNumber(10, 15, 2, 158, 41, 5, 74));
