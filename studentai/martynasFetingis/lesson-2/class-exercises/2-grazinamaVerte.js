// function checkAge(age) {
//   if (age > 18) {
//   return true; //console.log(true)
//   } else {
//   return confirm('Did parents allow you?');
//   }
//   }


function checkAge(age) {
  return (age > 18 ? console.log('welcome') :  confirm('Did parents allow you?'))
  };

console.log(checkAge(15));
