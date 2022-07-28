//1 uzduotis
const styles = ['Jazz', 'Blues'];
console.log(styles);
styles.push('Rock-n-Roll');
console.log(styles);
styles[1] = 'Classics';
console.log(styles);
const newStyles = styles.shift();
console.log(newStyles);
styles.unshift('Rap', 'Reggae');
console.log(styles);

//2uzduotis
let numbersArr = [11, -2, 34, 45, 19, -5, 6];

function getMaxSubSum(arr) {
    let sum = 0; 
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            sum += arr[i];
        }        
    }
    return sum;
}

console.log(getMaxSubSum(numbersArr));

//3 uzduotis

let randomArr = [11, 'cat', true, 4, 'mouse', 5, 9, 5, 76, false];

function getArrayByData(array, dataType){
    let newArrays = [];
    // if(typeof(dataType) === ''){
    //     return dataType;
    // } else if(typeof(dataType) === 'boolean'){
    //     return dataType;
    // } else if(typeof(dataType) === 'number'){
    //     return dataType;
    // }

    // // for (let i = 0; i < array.length; i++){
    // //     return(array[i]);
    // // }

    for (let item of array) {
        if(typeof item === dataType) {
            newArrays.push(item);
        }
    }
    return newArrays;
}
console.log(getArrayByData(randomArr, 'boolean'));
console.log(getArrayByData(randomArr, 'number'));
console.log(getArrayByData(randomArr, 'string'));
