let carMaker = "Audi";
let carYear = "2023";

if (carMaker === "BMW" || carMaker === "Audi" || carMaker === "VW" || carMaker === "Opel") {
    if (carYear === "2022") {
        console.log("Automobilis " + carMaker + " yra " + " siu metu");
    } else if (carYear > "2022") {
        console.log("Automobilis " + carMaker + " negali buti " + carYear);
    } else if (carYear === "2022") {
        console.log("Automobilis " + carMaker + " yra " + " siu metu");
    } else if (carYear >= "2010" && carYear <= "2022" || carYear >= "2000" && carYear <= "2010") {
        console.log("Automobilis " + carMaker + " yra " + (2022 - carYear) + " metu");
    } else if (carYear < "2000") {
        console.log("Automobilis " + carMaker + " yra " + " 20 metu ir senesnis");
    }
} else {
    console.log(carMaker + " automobilis sarase neegzistuoja");
}