const age = prompt('What is your age?');

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        /// ...
        return confirm ('Did parents allow you?');
    }
}
console.log(checkAge(age))

// let age = prompt('What is your age?');

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }  
//   return confirm("Did parents allow you?");
// }

// alert(checkAge);
