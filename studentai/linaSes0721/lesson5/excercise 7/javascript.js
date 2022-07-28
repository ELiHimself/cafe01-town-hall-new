const carMarkers = ["Audi", "BMW", "Opel", "VW"];
let car = "Audi";
let carYear = 2000;
if (carMarkers.includes(car)) {
    if (carYear >= 2010 && carYear < 2020) {
        console.log("Car " + car + " is 10 years old");
    }
    if (carYear >= 2000 && carYear < 2010) {
        console.log("Car " + car + " is 20 years old");
    }
    if (carYear < 2000) {
        console.log("Car " + car + " is older than 20 years");
    }

}
