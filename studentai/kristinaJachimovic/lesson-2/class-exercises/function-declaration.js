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
  return confirm('Did your parents allow you?');
}

console.log(checkAge(70));
console.log(checkAge2(7));
