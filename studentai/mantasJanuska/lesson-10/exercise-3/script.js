function getHigheestNumber(...args) {
    let max = 0;
    for (i = 0; i < args.length; i++) {
        if (args[i] > max) {
            max = args[i];
        }
        
    }
    return max;
}
console.log(getHigheestNumber(1, 2, 3))
