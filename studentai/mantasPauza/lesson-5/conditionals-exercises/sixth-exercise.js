let carYearEnding = ' ';

function getCarYear(carYear) {
    const yearRange = new Date().getFullYear() - carYear;


    if ( inRange(yearRange, 1, 9) || inRange(yearRange, 21, 29) || inRange(yearRange, 31, 39) || inRange(yearRange, 41, 49) || inRange(yearRange, 51, 59) || inRange(yearRange, 61, 69) || inRange(yearRange, 71, 79) || inRange(yearRange, 81, 89) || inRange(yearRange, 91, 99) ) {  
        return carYearEnding = ' metai';
    } else if (inRange(yearRange, 10, 20) || inRange(yearRange, 30, 40) || inRange(yearRange, 50, 60) || inRange(yearRange, 70, 80) || inRange(yearRange, 90, 100)) {
        return carYearEnding = ' metų';
    }
}

function inRange(number, min, max) {
    return number >= min && number <= max;
}

function getCarInfo(carMaker, carYear) {
    
    if (carMaker === 'Audi' || 'BMW' || 'Opel' || 'VW') {
        return 'Automobiliui ' + carMaker +  ' yra ' + (new Date().getFullYear() - carYear) + getCarYear(carYear) + '.';
    }

}
// metai = 1-9; 21-29; 31-39; ..... 99; 101-109;

//metų = 10-20; 30; 40; ..... 100; 110-120;





console.log(getCarInfo('Audi', 2020));
console.log(getCarInfo('BMW', 2019));
console.log(getCarInfo('VW', 2012));
console.log(getCarInfo('Opel', 2011));
console.log(getCarInfo('BMW', 2000));
console.log(getCarInfo('Opel', 1969));
console.log(getCarInfo('Audi', 1922));