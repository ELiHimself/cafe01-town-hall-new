function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

function checkAge2(age) {
    if (age > 18) {
        return true;
    }
    return confirm('Did parents allow you?');
}

console.log('1 < 18', checkAge(17));
console.log('1 > 18', checkAge(19));

console.log('2 < 18', checkAge2(17));
console.log('2 > 18', checkAge2(19));

//parasiau ka rodet pavyzdy, nieko nesuprantu, kodel visur true, prie ko cia 1 ir 2// :')
//nu bet dar bandau suprast:) //