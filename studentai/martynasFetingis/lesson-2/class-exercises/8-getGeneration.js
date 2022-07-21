const generations = {
  '-3': { m: 'great grandfather', f: 'great grandmother' },
  '-2': { m: 'grandfather', f: 'grandmother' },
  '-1': { m: 'father', f: 'mother' },
  0: { m: 'me!', f: 'me!' },
  1: { m: 'son', f: 'daughter' },
  2: { m: 'grandson', f: 'granddaughter' },
  3: { m: 'great grandson', f: 'great granddaughter' },
};

function getGeneration(number, gender) {
  return generations[number][gender];
}

console.log(getGeneration(2, 'f'));
console.log(getGeneration(-2, 'm'));
console.log(getGeneration(1, 'f'));
