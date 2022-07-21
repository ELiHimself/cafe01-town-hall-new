let carMaker = 'BMW';
let carYear = 2020;

if (carYear > 1999 && carYear < 2023) {
  console.log(`Your ${carMaker} car is ${2022 - carYear} years old.`)
} else if (carYear < 2000 && carYear > 1885) {
  console.log(`Your car is over 22 years old.`);
} else if (carYear < 1886) {
  console.log(`Your car came from the future.`);
} else {
  console.log(`Your car hasn't been made yet.`);
}


// Biski ne taip supratau uzduoti, taisysiu ka parasiau