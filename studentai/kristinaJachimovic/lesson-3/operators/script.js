function sum(a, b) {
  console.log(a + b);
}
sum(3, 3);

function oneNumber(num) {
  return 100 - num;
}
console.log(oneNumber(5));

function multi(a, b) {
  return a * b;
}
console.log(multi(2, 2));

function divide(a, b) {
  return a / b;
}
console.log(divide(10, 2));

function equal(num) {
  if (num % 2 == 0) {
    console.log('this is equal number');
  } else {
    return console.log('this is not equal number');
  }
}
equal(6);
equal(7);