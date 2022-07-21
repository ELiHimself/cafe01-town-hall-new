// free code camp testings //

console.log('Hello world');

var myName = 'John';
var myName = 'Jonas';

let yourName = 'Paul';
yourName = 'Paulius';
console.log(yourName);

console.log(yourName.length);

// Setup
let lastNameLength = 0;
const lastName = 'Lovelace';

// Only change code below this line
lastNameLength = lastName.length;
console.log(lastNameLength);

const myNoun = 'dog';
const myAdjective = 'big';
const myVerb = 'ran';
const myAdverb = 'quickly';

// Only change code below this line
const wordBlanks = 'The ' + myAdjective + ' ' + myNoun + ' ' + myVerb + ' ' + myAdverb + '.'; // Change this line
// Only change code above this line

console.log(wordBlanks);

// SetupmyArray
const myArray = [
  ['John', 23],
  ['cat', 2],
];
// Only change code below this line

const removedFromArray = myArray.pop();
console.log(removedFromArray);
console.log(myArray);

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return 'Tiny';
  } else if (num < 10) {
    return 'Small';
  } else if (num < 15) {
    return 'Medium';
  } else if (num < 20) {
    return 'Large';
  } else {
    return 'huge';
  }
  // Only change code above this line
}

console.log(testSize(20));

const names = ['Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Go Home!'];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
  // Only change code above this line
}

console.log(golfScore(10, 9));

function isLess(a, b) {
  // Only change code below this line

  return a < b;
  // Only change code above this line
}

console.log(isLess(10, 15));
