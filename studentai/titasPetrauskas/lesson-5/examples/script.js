const tusciasTekstas = ''; // false
const tarpasOnly = ' '; // true
const netusciasTekstas = 'tekstas'; // true
const number = 123; // true
const negativeNumber = -123; // true
const zero = 0; // false
const booleanValue = true; // true
const decimalValue = 5.5; //true

const functionExample = function(a, b) {
  return a + b;
} // true

const objectExample = {a: 1, b: 2, c: 3, d: 4,}; // true
const arrayExample = ['lalala', 123, 'example']; //true
const undefinedExample = undefined; //false
const nullExample = null; //false
const symbolExample = '%'; //true, bet sito nesupratau kaip ta simboli pavaizduoti nes cia visgi realiai stringas gaunasi? O kitaip jo parasyti neleidzia, meta error


if (symbolExample) {
  console.log('true');
} else {
  console.log('false');
}