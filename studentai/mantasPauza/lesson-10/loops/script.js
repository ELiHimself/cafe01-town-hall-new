
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