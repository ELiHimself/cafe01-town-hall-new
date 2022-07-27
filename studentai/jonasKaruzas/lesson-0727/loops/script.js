// uzduotis 1 ---------------

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// uzduotis 2 ---------------

function getLaugh(amount) {
  result = '';
  for (let i = 0; i < amount; i++) {
    result += 'ha';
  }

  result += '!';
  return result;
}

console.log(getLaugh(5));

// uzduotis 3 ---------------

const getHighestNumber = (...args) => {
  return args.sort((a, b) => a - b)[args.length - 1];
};

console.log(getHighestNumber(34, 7, 8, 55, 6, 7, 9, 52, 56));

// uzduotis 4 ---------------

for (let x = 9; x >= 1; x--) {
  console.log('hello ' + x);
}
