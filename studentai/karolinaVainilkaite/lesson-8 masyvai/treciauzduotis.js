let randomArr = [11, "cat", true, "mouse", 5, 9, 5, 76, false];

function getArrayByData(randomArr, dataType){
    let arrayByData = [];

for (let item of randomArr){
    if(typeof item === dataType){
        arrayByData.push(item);
    
    }
}
return arrayByData;
}
console.log(getArrayByData(randomArr, "number"));
console.log(getArrayByData(randomArr, "string"));
