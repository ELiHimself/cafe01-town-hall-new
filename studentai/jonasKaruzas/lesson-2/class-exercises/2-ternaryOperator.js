function checkAge(age){
    return age > 18 ? true : confirm('Did parents allow you?');
}

console.log(checkAge(2));
console.log(checkAge(20));