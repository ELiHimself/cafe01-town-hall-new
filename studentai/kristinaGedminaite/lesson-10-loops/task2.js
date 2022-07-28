function getLaugh(amount) {
    let ha = "";
    for (let i = 0; i < amount; i++) {
        ha += "ha";
    }
    return ha + "!";
}
console.log(getLaugh(5));