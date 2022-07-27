
//1 uzduotis
for ( let i = 2; i <= 10;  i++) {
    if(i % 2 === 0){
        console.log(i);
    }
};

//2 uzduotis

function getLaugh(amount) {
    let laugh = '';
    for (let i = 0; i < amount; i++) {
        laugh += 'ha';
    }
    return laugh + '!';
};
console.log(getLaugh(4));
