function add(num1, num2) {
  return num1 + num2;
}

function subtractFromHundred(num1) {
  return 100 - num1;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divideByTwo(num1) {
  return num1 / 2;
}

function exponentByFive(num) {
  return num ** 5;
}

function isEven(num1) {
  return num1 % 2 === 0 ? true : false;
}

function addOne(num) {
  num++;
  return num;
}

function minusOne(num) {
  num--;
  return num;
}

console.log(add(4, 6));
console.log(subtractFromHundred(98));
console.log(multiply(6, 5));
console.log(divideByTwo(8));
console.log(exponentByFive(2));
console.log(isEven(8));
console.log(isEven(9));
console.log(addOne(8));
console.log(minusOne(8));
