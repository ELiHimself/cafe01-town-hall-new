function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
checkAge(10);

function checkAge(age) {
  if (age > 18) {
    return true;
  } 
  // ...
  return confirm('Did parents allow you?');
}
checkAge(10);

// It returns the same value because whether or not we write "else", it still acts the same - shows the result that's other than age > 18