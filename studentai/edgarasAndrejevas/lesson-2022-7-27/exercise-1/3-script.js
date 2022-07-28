function getHighestNumber (...arrow) {
    let max = arrow[0];
    for (let i = 0; i < arrow.length; i++) {
        if (array[i] > max) {max = array [i]; }      
    }
    
}
console.log(getHighestNumber(34,7,8,55,6,7,9,52,56));