function calculate(num1, num2, action) {
    switch (action) {
        case 'addition':
            return num1 + num2;
        case 'substraction':
            return num1 - num2;
        case 'multiplication':
            return num1 * num2;
        case 'division':
            return num1 / num2;
        default:
            return 'Error';
    }
}

console.log(calculate(5, 5, 'addition'));
console.log(calculate(5, 5, 'substraction'));
console.log(calculate(5, 5, 'multiplication'));
console.log(calculate(5, 5, 'division'));
