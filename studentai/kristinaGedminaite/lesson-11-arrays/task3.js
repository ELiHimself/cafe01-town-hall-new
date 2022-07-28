let randomArr = [11, "cat", true, 4, "mouse", 5, 9, 5, 76, false];

 function getArrayByData(array, dataType) {
    let filteredArray = [];

    for (let item of array) {
        if (typeof item === dataType) {
            filteredArray.push(item);
        }
    }
    return filteredArray;
}

//console.log(getArrayByData(randomArr, "string"));
console.log(getArrayByData(randomArr, "number"));
