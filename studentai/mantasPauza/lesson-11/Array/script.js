//                              First exercise

const styles = ['Jazz', 'Blues'];

console.log(styles);

styles.push('Rock-n-Roll');

console.log(styles);

styles[1] = 'Classics';

console.log(styles);

const firstStyle = styles.shift();

console.log(firstStyle);
console.log(styles);

styles.unshift('Rap', 'Reggae');

console.log(styles);

//                              Second exercise

let numbersArr = [11, -2, 34, 45, 19, -5, 6];

function getMaxSubSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum = sum + arr[i];
        }
    }
    return sum;
}

console.log(getMaxSubSum(numbersArr));

//                              Third exercise


let randomArr = [11, 'cat', true, 4, 'mouse', 5, 9, 5, 76, false];

function getArrayByData(array, dataType) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === dataType) {
         result.push(array[i])
        }
    }
    return result;
}

console.log(getArrayByData(randomArr, 'string'));
console.log(getArrayByData(randomArr, 'number'));