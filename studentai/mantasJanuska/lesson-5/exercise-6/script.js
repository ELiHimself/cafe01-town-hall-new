let carMaker = "Opel";
let carYear = 2012;

if (carMaker === "Audi" || carMaker === "BMW" || carMaker === "Opel" || carMaker === "WV") {
    if (carYear >= 2010 && carYear <= 2020) {
        console.log(`Automobilis ${carMaker} yra 10-ties metu.`)
    } else if (carYear >= 2000 && carYear <= 2020) {
        console.log(`Automobilis ${carMaker} yra 20-ties metu.`)
    } else {
        console.log(`automobilis ${carMaker} yra 20-ties metu ir senesnis`)
    }
}