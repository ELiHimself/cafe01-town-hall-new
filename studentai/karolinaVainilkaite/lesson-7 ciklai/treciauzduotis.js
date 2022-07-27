function getHighestNumber(...arg){
    let max = 0;
    for (let i = 0; i < arg.length; i++){
        if (arg[i] > max){
            max = arg[i];     
        }
    }
    return max;
}
console.log(getHighestNumber(34, 7, 8, 55, 6, 7, 9, 52, 56));
