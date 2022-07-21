let carMaker = "Audi";
let carYear = "2015";

if (carMaker === "BMW" || carMaker === "Audi" || carMaker === "VW" || carMaker === "Opel") {
    if (carYear >= "2010" && carYear <= "2020") {
        console.log("Automobilis " + carMaker + " yra " + carYear + " metu");
    } else if (carYear >= "2000" && carYear <= "2010") {
        console.log("Automobilis " + carMaker + " yra " + carYear + " metu");
    } else if (carYear < "2000") {
        console.log("Automobilis " + carMaker + " yra " + carYear + " metu ir senesnis");
    }
} else {
    console.log(carMaker + " automobilis sarase neegzistuoja");
}