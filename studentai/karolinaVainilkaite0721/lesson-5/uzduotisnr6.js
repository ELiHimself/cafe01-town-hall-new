let carMaker = 'Audi';
let carYear = 2000;

if(carMaker === "Audi" ||carMaker === "BMW" || carMaker === "VW" || carMaker === "Opel" ){
    if(carYear > 2020){
        console.log("Automobilis " + carMaker + " yra naujas");
    }else if(carYear >= 2010 && carYear <= 2020){
        console.log("Automobilis " + carMaker + " yra 10 metų");
    }else if(carYear >= 2000 && carYear <= 2010){
        console.log("Automobilis " + carMaker + " yra 20 metų");
    }else{
        console.log("Automobilis " + carMaker + " yra 20 metų ir senesnis");
    }
}

