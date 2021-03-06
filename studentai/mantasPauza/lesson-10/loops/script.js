// ***************************************** First exercise

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// ***************************************** Second exercise

function getLaugh(amount) {
  let laugh = '';
  for (let i = 0; i < amount; i++) {
    laugh += 'ha';
  }
  return laugh + '!';
}

console.log(getLaugh(5));

// ***************************************** wanted to try second exercise with .repeat

function laugh(amount) {
    let laughing = 'ha';
    return laughing.repeat(amount) + '!';
}

console.log(laugh(5));

// ***************************************** Third exercise

const getHighestNumber = (...args) => {
  let highest = 0;
  for (let i = 0; i < args.length; i++) {
    if (highest < args[i]) {
      highest = args[i];
    }
  }
  return highest;
};

console.log(getHighestNumber(1, 20, 3));

// ***************************************** Fourth exercise

for (let i = 9; i >= 1; i--) {
  console.log('hello ' + i);
}

// ***************************************** Fifth exercise

function createTree(height) {
  for (let i = 0; i < height; i++) {
    let branch = '+';
    let space = ' ';

    for (let j = 1; j <= i; j++) {
      branch = branch + '++';
    }

    let spacesBefore = space.repeat(height - i - 1);
    branch = spacesBefore + branch;
    console.log(branch);
  }
}

createTree(5);


// ****************************************** Extra exercise 

function jingleBells(height) {
    for (let i = 0; i < height; i++) {
      let branches = '+'.repeat(2 * i + 1);
      let airPocket = ' '.repeat(height - i - 1);
      console.log(airPocket + branches);
    }
}

jingleBells(5);