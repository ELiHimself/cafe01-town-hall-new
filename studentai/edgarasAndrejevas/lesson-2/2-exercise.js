const age = prompt('What is your age?');

// --Change this to Conditional (ternary) operator--
// function checkAge(age) {
//     if(age > 18) {
//         return true;//console.log(true)
//     } else {
//         return confirm('Did parents allow you?');
//     }
// }

const checkAge = age > 18 ? true : confirm ('Did parents allow you?');

console.log(checkAge);