function getHighestNumber(...args) {
let max = 0;
for (let i = 0; i < args.length; i++) {
    if (args[i] > max ){
        max = args[i];
    }
}
return max;   
}

console.log(getHighestNumber(34,7,8,55,6,7,9,52,56));