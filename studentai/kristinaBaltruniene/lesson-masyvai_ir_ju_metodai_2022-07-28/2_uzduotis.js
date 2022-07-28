let numbersArr = [11, -2, 34, 45, 19, -5, 6];
function getMaxSubSum(arr) {
    let sum = 0;
    for (let i = 0; i < numbersArr.length; i++) {
        if (numbersArr[i] > 0) {
            sum += numbersArr[i];
        }
    }
    return sum;
}

console.log(getMaxSubSum(numbersArr));



// Turite masyvą:
// let numbersArr = [11, -2, 34, 45, 19, -5, 6]
// Sukurkite funkciją getMaxSubSum(arr), kuri sugrąžins masyvo (Array) visų įvestų skaičių, kurie yra didesni nei 0 sumą.


