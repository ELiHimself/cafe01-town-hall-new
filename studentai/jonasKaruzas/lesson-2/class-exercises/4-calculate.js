function calculate(num1, num2, action) {
  switch (action) {
    case 'composition':
      return num1 + num2;
    case 'subtraction':
      return num1 - num2;
    case 'division':
      return num1 / num2;
    case 'multiplication':
      return num1 * num2;
    default:
      return undefined;
  }
}

console.log(calculate(8, 9, 'composition'));
console.log(calculate(18, 9, 'subtraction'));
console.log(calculate(10, 2, 'division'));
console.log(calculate(10, 5, 'multiplication'));
console.log(calculate(10, 5, 'grybas'));
