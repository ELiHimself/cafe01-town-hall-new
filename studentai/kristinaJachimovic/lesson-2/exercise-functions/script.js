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
}
a();

