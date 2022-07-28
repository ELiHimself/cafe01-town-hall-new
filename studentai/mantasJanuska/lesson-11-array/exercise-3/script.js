let randomArr = [11, 'cat', true, 4, 'mouse', 5, 9, 5, 76, false];

function getArrayByData(array, dataType) {
    let basket = [];
    for (let item of array) { // elementai Sarase
        if (typeof item === dataType) {  // jeigu saraso elementai atitinka ivesties tipa
            basket.push(item);     // is esamo saraso isima reikalingus elementus ir grazina i tuscia sarasa 'basket'.
        }
    }
    return basket;
}
console.log(getArrayByData(randomArr, 'boolean'))
