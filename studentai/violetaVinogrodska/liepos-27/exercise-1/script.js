
//1 uzduotis
for ( let i = 2; i <= 10;  i++) {
    if(i % 2 === 0){
        console.log(i);
    }
}

//2 uzduotis

function getLaugh(amount) {
    let laugh = '';
    for (let i = 0; i < amount; i++) {
        laugh += 'ha';
    }
    return laugh + '!';
}
console.log(getLaugh(4));

//3 uzduotis

function getHighestNumber(...args) {
    console.log(args);
    let max = 0;
    for (let i = 0; i < args.length; i++) {
        if (args[i] > max){
            max = args[i];
        }      
    }
    return max;
}
console.log(getHighestNumber(34, 7, 8, 55, 6, 7, 9, 52, 56));
