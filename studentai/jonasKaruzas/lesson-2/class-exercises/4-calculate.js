function calculate(num1, num2, action) {
    if (action === 'composition') {
        return num1 + num2;
    } else if (action === 'subtraction') {
        return num1 - num2;        
    } else if (action === 'division') {
        return num1 / num2;
    } else if (action === 'multiplication') {
        return num1 * num2;
    } else {
        return undefined;
    }
}

console.log(calculate(8, 9, 'composition'));
console.log(calculate(18, 9, 'subtraction'));
console.log(calculate(10, 2, 'division'));
console.log(calculate(10, 5, 'multiplication'));
console.log(calculate(10, 5, 'grybas'));
