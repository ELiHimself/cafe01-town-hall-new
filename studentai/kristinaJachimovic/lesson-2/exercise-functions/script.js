const currentTime = new Date();

function esam() {
  return `Dabar yra ${currentTime.getFullYear()} metai`;
};
console.log(esam());

console.log(new Intl.DateTimeFormat('en-US').format(currentTime));

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet('world'));

const greeting = greet('Awesome soon to be front enders');
console.log(greeting);

function a() {
  console.log('lol');
};
a();

// let ivestis = prompt('Ivesk skaiciu: ');
// function add() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum - ivestis;
// };
// console.log(add(8, 7, 9));

// let logo = prompt('Ivesk skaiciu: ');
// function addNumber() {
//   let sum = 0;
//   for (let j = 0; j < arguments.length; j++) {
//     sum += arguments[j];
//   }
//   return sum / logo;
// }

// console.log(addNumber(1, 1, 1));
// console.log(addNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// arrow

console.log(esam(`Dabar yra ${currentTime.getFullYear()} metai`));

const vardas = (name) => `hello, ${name} !`;

