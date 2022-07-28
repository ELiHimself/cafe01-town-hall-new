function getLaugh(amount) {
    laugh = "";
    for (let i = 1; i <= amount; i++) {
        laugh += "ha";
    }
    return laugh
}
console.log(getLaugh(5));