function checkAge(age){
  return (age > 18 ? true : 'Did parents allow you?');
};

console.log(checkAge(33));
console.log(checkAge(5));