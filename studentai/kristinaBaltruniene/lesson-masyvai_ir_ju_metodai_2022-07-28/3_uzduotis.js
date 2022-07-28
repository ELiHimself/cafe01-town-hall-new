let randomArr = [11, 'cat', true, 4, 'mouse', 5, 9, 5, 76, false];

function getArrayByData(array, dataType) {
    let arr = [];

    for (let i = 0; i < array.length; i++) {

        if (dataType === typeof(array[i])) {

            arr.push(array[i]);
        }
    }
    return arr
}

// console.log(getArrayByData(randomArr, "string"));
console.log(getArrayByData(randomArr, 'boolean'));
// console.log(getArrayByData(randomArr, 'number'));






// Turite masyvą:
// let randomArr = [11, “cat”, true, 4, “mouse” 5, 9, 5, 76, false]
// Sukurkite funkciją getArrayByData(array, dataType), kuri kaip parametrus priims array (masyvą) ir dataType (string, kuris
// nurodo duomenų tipą: “number” arba “string” arba “boolean”) ir grąžins naują masyvą. Naujo masyvo duomenys bus paimami
// iš pirmo argumento array (masyvo) išfiltruoti pagal duomenų tipą nurodytą kaip dataType.
// Iškvietus: getArrayByData(randomArr, “string”)
// Rezultatas: [“cat”, “mouse”]
// Iškvietus: getArrayByData(randomArr, “number”)
// Rezultatas: [11, 4, 5, 9, 5, 76]
// Užduotis nr. 3