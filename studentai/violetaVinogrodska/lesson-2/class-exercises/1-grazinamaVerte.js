function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm("Did parents allow you?");
    };
};
function checkAge2(age) {
    if (age > 18) {
        return true;
    }
    return confirm("Did parents allow you?");
};

console.log(checkAge(19));
console.log(checkAge(2));

console.log(checkAge2(19));
console.log(checkAge2(2));