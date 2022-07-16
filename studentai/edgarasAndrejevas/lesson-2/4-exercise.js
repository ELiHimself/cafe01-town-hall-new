const num1 = prompt('Enter your first number', 'First number');
const action = prompt('Enter math action you want to do:\nFor Composition: +\nFor Subtraction: -\nFor Multiplication: *\nFor Division: /');
const num2 = prompt('Enter your second number', 'Second number');

const calculate = 
action == '+' ? parseInt(num1) + parseInt(num2) : 
action == '-' ? num1 - num2 : 
action == '*' ? num1 * num2 : 
action == '/' ? num1 / num2 : 
window.alert('You have to read instructions more carefully');

const result = 
window.confirm(`The result of ${num1} ${action} ${num2} = `+ calculate +`\nCan you confirm`) ? window.alert('Thank you') : window.alert('I`m Sorry. An error occurred.');