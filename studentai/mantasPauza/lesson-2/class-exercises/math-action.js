const num1 = prompt('Enter first number');
const num2 = prompt('Enter second number');
const action = prompt('Enter action (addition, substraction, multiplication, division)');

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
            return confirm('Error');
    }
}

console.log(calculate(num1, num2, action));
