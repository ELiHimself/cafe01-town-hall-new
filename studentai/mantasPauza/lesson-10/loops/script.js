
// ***************************************** First exercise

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// ***************************************** Second exercise 

function getLaugh(amount) {
    let laugh = "";
    for (let i = 0; i < amount; i++) {
        laugh += "ha";
    }
    return laugh + "!";
}

console.log(getLaugh(5));

// ***************************************** Third exercise

const getHighestNumber = (...args) => {
    let highest = 0;
    for (let i = 0; i < args.length; i++) {
        if (highest < args[i]) {
            highest = args[i];
        }
    }
    return highest;
}

console.log(getHighestNumber(1, 20, 3));

// ***************************************** Fourth exercise


for (let i = 9; i >= 1; i--) {
    console.log('hello ' + i);
}

