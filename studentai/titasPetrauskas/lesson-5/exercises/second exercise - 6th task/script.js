let carMaker = 'Peugeot';
let carYear = 2005;

function carYearCounter(carYear, carMaker) {
  if (carYear > 1999 && carYear < 2023) {
   console.log(`Your ${carMaker} car is ${2022 - carYear} years old.`)
  } else if (carYear < 2000 && carYear > 1885) {
   console.log(`Your ${carMaker} car is over 22 years old.`);
  } else if (carYear < 1886) {
   console.log(`Your ${carMaker} car came ${1886 - carYear} years from the future.`);
  } else {
   console.log(`Your ${carMaker} car hasn't been made yet.`);
  }
}

function isInDatabase(carMaker) {
  if (carMaker === 'BMW' || carMaker === 'Audi' || carMaker === 'Opel' || carMaker === 'Volkswagen') {
    return true;
  } 
  return false;
}

if (isInDatabase(carMaker)) {
  carYearCounter(carYear, carMaker);
} else {
  console.log (`The car brand \"${carMaker}\" is not in the database.`);
}
