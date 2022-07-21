// Uzduotis 1 ---------------

let money = 100.5;
let price = 105.5;

if (money > price) {
  console.log("You paid extra, here's your change.");
} else if (money === price) {
  console.log('You paid the exact amount, have a nice day!');
} else {
  console.log("That's not enough, you still owe me money.");
}

// Uzduotis 2 ---------------

let runner = 'Kendyll';
let position = 2;
let medal;

if (position === 1) {
  medal = 'gold';
} else if (position === 2) {
  medal = 'silver';
} else if (position === 3) {
  medal = 'bronze';
} else {
  medal = 'pat on the back';
}
console.log(runner + ' receiver a' + medal + ' medal.');

// Uzduotis 3 ---------------

let number = 25;

if (number % 2 === 0) {
  console.log('lyginis');
} else {
  console.log('nelyginis');
}

// Uzduotis 4 ---------------

function kokiaMuzikosGrupe(num) {
  if (num === 0) {
    return 'ne grupe';
  } else if (num === 1) {
    return 'solo';
  } else if (num === 2) {
    return 'duetas';
  } else if (num === 3) {
    return 'trio';
  } else if (num === 4) {
    return 'kvartetas';
  } else if (num > 4) {
    return 'didele grupe';
  } else {
    return 'nu jau kazkas super negerai :(';
  }
}

for (let i = 0; i < 7; i++) {
  console.log(kokiaMuzikosGrupe(i));
}
