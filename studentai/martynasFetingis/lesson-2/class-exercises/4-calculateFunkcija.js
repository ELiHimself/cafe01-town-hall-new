function calculate(num1, num2, action) {
  if (action === 'composition') {
    return num1 + num2;
  } else if (action === 'subtraction') {
    return num1 - num2;
  } else if (action === 'multiplication') {
    return num1 * num2;
  } else if (action === 'division') {
    return num1 / num2;
  }
}

console.log(calculate(10, 5, 'division'));
