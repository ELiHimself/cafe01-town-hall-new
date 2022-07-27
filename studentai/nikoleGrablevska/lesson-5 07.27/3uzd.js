function getHighestNumber(...arg) {
    let max = 0;
    for (let n = 0; n <= arg.length; n++) {
        if (arg[n] > max) {
            max = arg[n];
        }
    }  
    return max;
}
console.log(getHighestNumber(34,7,8,55,6,7,9,52,56));
