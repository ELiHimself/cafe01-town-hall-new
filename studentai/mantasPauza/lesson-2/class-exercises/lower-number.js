const a = prompt('Enter first number');
const b = prompt('Enter second number');

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(a, b));