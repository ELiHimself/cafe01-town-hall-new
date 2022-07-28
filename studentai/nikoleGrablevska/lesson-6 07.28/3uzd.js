let randomArr = [11, "cat", true, 4, "mouse", 5, 9, 5, 76, false]

function getArrayByData(array, dataType) {
    let filteredArr = [];

    for (let item of array) {
        if (typeof item === dataType) {
            filteredArr.push(item);
        }
    }
    return filteredArr;
}

console.log(getArrayByData(randomArr, 'string'));