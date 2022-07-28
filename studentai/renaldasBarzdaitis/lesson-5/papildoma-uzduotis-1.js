function keliemiejiMetai(metai) {
    if(metai % 4 === 0 && metai % 100 !== 0 || metai % 400 === 0) {
        console.log("metai keliamieji");
    } else {
        console.log("metai nekeliamieji");
    }
}

console.log(keliemiejiMetai(2021));