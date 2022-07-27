// uzduotis 1 ---------------

for (let i = 2; i <= 10; i++) {
  i % 2 === 0 ? console.log(i) : undefined;
}

// uzduotis 2 ---------------

function getLaugh(amount) {
  result = '';
  for (let i = 0; i < amount; i++) {
    result += 'ha';
  }
  return result;
}

console.log(getLaugh(5));
