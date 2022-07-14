function checkAge(age) {
    if (age > 18)  {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

function checkingAge(age) {
    if (age > 18) {
        return true; 
    }
    return confirm('Did parents allow you?');
}

// First function checks if age is 18 returns true, if not, returns confirm
// Second function checks if age is 18 returns true, but returns confirm either way