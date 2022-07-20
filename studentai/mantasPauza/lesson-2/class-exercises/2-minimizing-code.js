/* function checkAge(age) {
    if (age > 18) {    
      return true; //console.log(true)  
  } else {    
      return confirm('Did parents allow you?');  
  }
} */


const age = prompt('What is your age?');

const checkAge = age >= 18 ? true : 'Did parents allow you?';

console.log(checkAge);

// I dont really know if that is correct, but it gives the correct answer.