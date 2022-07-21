let carMaker = ['Audi', 'BMW', 'Opel', 'VW'];
let carYear = 2000;

function carVertical(carMaker, carYear) {
  if (carMaker.includes('Audi', 'BMW', 'Opel', 'VW') && carYear >= 2010 && carYear <= 2020) {
    return 'Automobilis ' + carMaker + ' yra 10 metų.';
  } else if (carMaker.includes('Audi', 'BMW', 'Opel', 'VW') && carYear >= 2000 && carYear <= 2010) {
    return 'Automobilis ' + carMaker + ' yra 20 metų.';
  } else if (carMaker.includes('Audi', 'BMW', 'Opel', 'VW') && carYear < 2000) {
    return 'Automobilis ' + carMaker + ' yra 20 metų ir senesnis.';
  } else if (!carMaker.includes('Audi', 'BMW', 'Opel', 'VW')) {
    return 'Automobilis ' + carMaker + ' nėra įtrauktas į duomenų bazę.';
  }
}

console.log(carVertical('Renault', 1980));
