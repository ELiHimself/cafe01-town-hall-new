function calculate(num1, num2, action) {
  switch (action) {
    case 'composition': console.log(num1 + num2);
    break;
    case 'subtraction': console.log(num1 - num2);
    break;
    case 'multiplication': console.log(num1 * num2);
    break;
    case 'division': console.log(num1 / num2);
    break;
  }
}

calculate (5, 6, 'multiplication');