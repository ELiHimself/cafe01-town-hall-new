function getLengthOfMissingArray(arrayOfArrays) {
  const arrLengths = [];
  let missingLength = 0;

  if (!arrayOfArrays || arrayOfArrays.length === 0) {
    return 0;
  }

  for (array of arrayOfArrays) {
    if (array === null || array.length === 0) {
      return 0;
    } else {
      arrLengths.push(array.length);
    }
  }

  arrLengths.sort((a, b) => a - b);

  for (let i = 0; i < arrLengths.length - 1; i++) {
    if (arrLengths[i] + 1 !== arrLengths[i + 1]) {
      return arrLengths[i] + 1;
    }
  }
}
