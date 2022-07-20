function checkAge1(age){
    if (age > 18){
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

function checkAge2 (age){
    if (age > 18){
        return true;
    }
    return confirm ('did parents allow you!');
}
console.log(checkAge1(19));
console.log(checkAge1(6));
console.log(checkAge2(5));
console.log(checkAge2(30));

