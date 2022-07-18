const age = prompt('What is your age?');

function checkAge(age) {
    if(age > 18) {
        return true;//console.log(true)
    } else {
        return confirm('Did parents allow you?');
    }
}

console.log(checkAge(age))