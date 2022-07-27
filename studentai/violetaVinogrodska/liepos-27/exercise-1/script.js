
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


//4 uzduotis
for (let x = 9; x >= 1; x--){
    console.log('hello ' + x);
}

//5 uzduotis
function createTree(height) {
    for (let i = 1; i <= height; i++) {
        printRow(i, height);
    }
}

function printRow(rowNumber, height) {
    const rowWidth = height * 2 - 1;
    const starCount = rowNumber * 2 - 1;
    const space = (rowWidth - starCount) / 2;

    console.log(' '.repeat(space) + '*'.repeat(starCount) + ' '.repeat(space));
}

createTree(5);

//5+ uzduotis
//   *
//  * *
// * * * ...

function makeNewTree(aukstis){
    for (let i = 1; i <= aukstis; i++) {
        createRow(i, aukstis);
    }
}
function createRow(numberRow, aukstis) {
    const plotis = aukstis * 2;
    const zvaigzdute = numberRow * 2;
    const tarpelis = (plotis - zvaigzdute) / 2;

    console.log(' '.repeat(tarpelis) + '*'.repeat(zvaigzdute) + ' '.repeat(tarpelis));
}
makeNewTree(5);