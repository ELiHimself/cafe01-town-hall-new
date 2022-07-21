let carMake = 'lambo';
let carYear = 1999;
const currentYear = 2022;

function getCarAge(carYear, currentYear) {
  carAge = currentYear - carYear;
  return carAge;
}
getCarAge(carYear, currentYear);

function printCarMakeAndAge(carAge, carMake) {
  if (carMake === 'Audi' || carMake === 'BMW' || carMake === 'Opel' || carMake === 'VW') {
    if (carAge <= 10) {
      console.log('Automobilis ' + carMake + ' yra naujesnis nei 10 metų');
    } else if (carAge <= 20) {
      console.log('Automobilis ' + carMake + ' yra tarp 10 ir 20 metų senumo');
    } else {
      console.log('Automobilis ' + carMake + ' yra senesnis nei 20 metų');
    }
  } else {
    console.log('Jūsų automobilio markės duomenų neturime');
  }
}
printCarMakeAndAge(carAge, carMake);
