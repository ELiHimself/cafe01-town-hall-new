// CHALLENGE ONE
// number one
function greet(name) {
  return `Hello, ${name}!`;
}

const greeting = greet('awesome soon to be front-enders')
console.log(greeting);

//number two(void function that takes no parameters and does something)
function second() {
  console.log('This one logs something but takes no parameters');
}
second();

//number three(void function that takes one parameter as object and mutates that object)
const randomObject = {
  name: 'Vardenis',
  age: 55,
}

function makeOlder(someObject) {
  someObject.age += 1;
}
makeOlder(randomObject);

//number four(return function that takes no arguments but returns something (e.g. current time)
function fourth() {
  const currentTime = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;
  return currentTime;
}
console.log(fourth());

//number fifth(return function that takes 1..n number of arguments, does something with input and returns the result)
function fifth(a, b, c) {
  return a * b - c;
}

console.log(fifth(15, 5, 55));