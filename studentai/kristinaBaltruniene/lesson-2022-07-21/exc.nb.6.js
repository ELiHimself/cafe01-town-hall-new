
function getCarInfo(maker, year) {
    const carMaker = ["audi", "mb", "bmw", "opel", "vw"];
    // console.log(maker);
    const carYearArray = [10, 20];
    const carAge = 2022 - year;


    let carModel = "";
    let carModelYear = null;

    for (let i = 0; i < carMaker.length; i++) {
        if (carMaker[i] === maker) {
            carModel = carMaker[i];
        }
    }
    if (carModel != "") {
        for (let j = 0; j < carYearArray.length; j++) {
            if (carYearArray[j] === carAge) {
                return `Automobilis ${carModel} yra ${carYearArray[j]} metu`
            } else if (carYearArray[j] > 20) {
                return `Automobilis ${carModel} yra senesni kaip 20 metu`
            }
        }

    } else {
        return "automobilio modeli neegzistuojs DB"
    }
}
console.log(getCarInfo("audi", 2000));