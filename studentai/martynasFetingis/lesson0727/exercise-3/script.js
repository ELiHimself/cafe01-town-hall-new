function getHighestNumber(...args) {
  let max = 0;
  for (let i = 0; i < args.length; i++) {
    if (args[i] > max) {
      max = args[i];
    }
  }
  return max;
}
console.log(getHighestNumber(1, 2, 3, 4, 5, 6, 7, 16, 9, 10, 11, 12));
