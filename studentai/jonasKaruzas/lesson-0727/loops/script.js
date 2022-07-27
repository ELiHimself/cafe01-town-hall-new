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
// uzduotis 5 ---------------

// function createTree(height) {
//   let rowLength = height * 2 + 1;
//   let row = [];
//   let starCount = 1;

//   for (let i = 0; i < height; i++) {
//     let spaceLength = rowLength - starCount;
//     console.log(spaceLength);
//     row += Array(spaceLength).fill('');

//     for (let j = 0; j < starCount; j++) {
//       row += ['*'];
//     }

//     row += Array(spaceLength).fill('');

//     starCount += 2;
//     console.log(row);
//     row = [];
//   }

//   //   console.log(row);
// }

// console.log(createTree(3));

// uzduotis 5v2 ---------------

function createTree2(height) {
  let result = '';
  let starCount = 1;
  let spaceLength = height;

  for (let i = 1; i < height + 1; i++) {
    for (let k = spaceLength; k > 0; k--) {
      result += ' ';
    }

    for (let j = 0; j < starCount; j++) {
      result += '*';
    }

    spaceLength--;
    starCount += 2;
    console.log(result + '\n');
    result = '';
  }
}

createTree2(5);
