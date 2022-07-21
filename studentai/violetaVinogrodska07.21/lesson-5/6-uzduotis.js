let carMaker = 'Audi';
let carYear = 1999;

if(carMaker === 'Audi' || carMaker === 'BMW' || carMaker === 'Opel' || carMaker === 'VW' && carYear >= 2010 &&  carYear <= 2020 ) {
    console.log('Automobilis ' + carMaker + ' yra ' + ' 10 metu')
} else if(carMaker === 'Audi' || carMaker === 'BMW' || carMaker === 'Opel' || carMaker === 'VW' && carYear < 2010 && carYear >= 2000) {
    console.log('Automobilis ' + carMaker + ' yra ' + ' 20 metu')
} else if(carMaker === 'Audi' || carMaker === 'BMW' || carMaker === 'Opel' || carMaker === 'VW' && carYear < 2000 ) {
    console.log('Automobilis ' + carMaker + ' yra ' + ' 20 metu ir senesnis')
};